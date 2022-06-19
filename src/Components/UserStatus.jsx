import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const UserStatus = () => {
  const [state] = useContext(AuthContext);

  return (
    <div>
      {state.auth && (
        <div className="name">
          <h1>USER SIGNED IN</h1>
        </div>
      )}
      {!state.auth && (
        <div className="name">
          <h1>PLEASE DO SIGN IN</h1>
        </div>
      )}
    </div>
  );
};
