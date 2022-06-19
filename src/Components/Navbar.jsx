import React from "react";
import { useContext } from "react";
import { FaCartPlus, FaUserCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Navbar = () => {
  const [state] = useContext(AuthContext);

  return (
    <div>
      <div className="heading">
        <p>FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500</p>
      </div>
      <div className="searching">
        <div>
          <input type="text" placeholder="Search here..."></input>
          <button
            style={{
              margin: "auto",
              height: "1.9rem",
              width: "2.3rem",
              backgroundColor: "#3d3737",
              borderStyle: "none",
              borderRadius: "7px",
            }}
          >
            <FaSearch color="#fff" size="1.2rem" />
          </button>
        </div>
        <div>
          <img
            src="https://www.uboric.com/wp-content/uploads/2021/04/uboric.svg"
            alt="Image Error"
          />
        </div>
        <div className="cartuser">
          <p>
            <FaUserCircle color="#1e516c" size="2rem" />
          </p>
          <Link to="/cart">
            <p>
              <FaCartPlus color="#1e516c" size="2rem" />
            </p>
          </Link>
          <p
            style={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              color: "#1e516c",
            }}
          >
            ( {state.cart.length} )
          </p>
        </div>
      </div>
      <div className="menu">
        <div>
          <p>
            <Link className="link" to="/">
              Home
            </Link>
          </p>

          <p>
            {" "}
            <Link to="/" className="link">
              Categories
            </Link>
          </p>
          <p>
            <Link className="link" to="/login">
              Customer/Guest login
            </Link>
          </p>
          <p>
            <Link to="/" className="link">
              Merchant/Bulk Order
            </Link>
          </p>
          <p>
            {" "}
            <Link to="/" className="link">
              Become A Seller
            </Link>
          </p>
          <p>
            <Link className="link" to="/logout">
              Guest logout
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
