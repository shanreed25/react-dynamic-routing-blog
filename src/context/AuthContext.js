import { createContext, useContext } from "react";

export const AuthContext = createContext(undefined);

export default function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used inside of the PostsContext.Provider");
  }

  return context;
}