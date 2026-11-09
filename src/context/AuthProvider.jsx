import { useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
  //could just use useState for isAuthenticated but adding the reducer
  //means I can easily extend the app later
  const [state, dispatch] = useReducer(authReducer, {isAuthenticated: false,});

  function login() {
    // console.log("You have been logged in successfully");
    dispatch({ type: "login" });
  }

  function logout() {
    dispatch({ type: "logout" });
    // console.log("You have been logged out successfully");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: state.isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}