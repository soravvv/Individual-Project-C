import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const BathroomAccessories = () => {
  const [data, setData] = useState([]);

  const getting = async function () {
    axios
      .get("http://localhost:2345/bathroomaccessories")
      .then((d) => {
        setData(d.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getting();
  }, []);

  return (
    <div>
      <div className="name">
        <h1>BATHROOM ACCESSORIES</h1>
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
