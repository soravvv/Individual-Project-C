import axios from "axios";
import React from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  const [state, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();

  if (state.auth) {
    return <Navigate to="/" />;
  }

  const loginuser = async () => {
    axios({
        url: "https://reqres.in/api/login",
        method: "POST",
        data: {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        },
      })
      .then((res) => {
        alert("LogIn Successfull !!");
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data.token,
        });
        navigate("/");
      })
      .catch((err) => {
        alert("LogIn Failure !!");
        dispatch({
          type: "LOGOUT_SUCCESS",
        });
      });
  };

  return (
    <div>
        <br /><br /><br /><br /><br />
      <h1 style={{textAlign : "center"}}>Log In</h1>
      <button className="featureb" onClick={loginuser}>LogIn</button>
    </div>
  );
};
