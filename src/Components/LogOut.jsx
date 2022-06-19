import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const LogOut = () => {
  const [state, dispatch] = useContext(AuthContext);

  return (
    <div>
        <br /><br /><br /><br /><br />
      <h1 style={{textAlign : "center"}}>Log Out</h1>
      <br />
      <button className="featureb"
        onClick={() => {
          alert("LogOut Successfull !!");
          dispatch({
            type: "LOGOUT_SUCCESS",
          });
        }}
      >LogOut</button>
    </div>
  );
};
