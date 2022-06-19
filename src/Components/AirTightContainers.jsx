import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const AirTightContainers = () => {
  const [data, setData] = useState([]);
  const [state, dispatch] = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getting = async function () {
    setLoading(true);
    axios
      .get("http://localhost:2345/airtightcontainers")
      .then((d) => {
        setLoading(false);
        setError(false);
        setData(d.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  };

  useEffect(() => {
    getting();
  }, []);

  return (
    <div>
      {loading && (
        <div className="name">
          <h1>...LOADING</h1>
        </div>
      )}
      {error && (
        <div className="name">
          <h1>...ERROR</h1>
        </div>
      )}
      <div className="name">
        <h1>AIR TIGHT CONTAINERS</h1>
      </div>
      {data?.map((e) => (
        <div className="boxesk" key={e._id}>
          <div className="boxk">
            <div>
              <div>
                <img src={e.image} alt="" />
              </div>
              <div>
                <p>Name : {e.name}</p>
              </div>
              <div>
                <p>Price : {e.price}</p>
              </div>
              <button
                className="featureb"
                onClick={() => {
                  dispatch({
                    type: "CART_ADD",
                    payload: {
                      id: e._id,
                      image: e.image,
                      name: e.name,
                      price: e.price,
                    },
                  });
                  alert("Added into Cart Successfully !!");
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
