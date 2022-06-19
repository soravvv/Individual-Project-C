import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Cart = () => {
  const [state, dispatch] = useContext(AuthContext);
  var total = 0;
  const navigate = useNavigate();

  state.cart.map((e) => {
    total = total + e.price;
  });

  return (
    <div>
      <br />
      <div className="name">
        <h1>CART PAGE</h1>
      </div>
      <div className="name">
        <h1>Total Amount : {total}</h1>
      </div>
      {state.cart.length === 0 && (
        <div className="name">
          {" "}
          <h1>Empty Cart</h1>
        </div>
      )}
      <br />
      <br />
      {state.cart.length !== 0 && (
        <div>
          <button
            className="featureb"
            onClick={() => {
              alert("Order Placed Successfully !!");
              navigate("/orderplaced");
            }}
          >
            Place Order
          </button>
        </div>
      )}
      <br />
      {state.cart.map((e) => (
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
                    type: "ORDER_PLACED"
                  });
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
