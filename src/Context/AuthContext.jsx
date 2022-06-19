import { useReducer } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const init = {
  auth: true,
  token: null,
  cart: [],
};

console.log(init);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        auth: true,
        token: action.payload,
      };
    }
    case "CART_ADD": {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case "ORDER_PLACED": {
      return {
        ...state,
        cart: (state.cart.length = 0),
      };
    }
    case "LOGOUT_SUCCESS": {
      return {
        ...state,
        auth: false,
        token: null,
      };
    }
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, init);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};
