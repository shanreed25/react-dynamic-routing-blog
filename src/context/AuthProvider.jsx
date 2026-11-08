import { useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {isAuthenticated: false,});

  function login() {
    dispatch({ type: "login" });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: state.isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}