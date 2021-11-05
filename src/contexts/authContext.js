import { createContext, useState } from "react";

//Create context React
export const AuthContext = createContext();

//Wrap application with provider with AuthState
export default function AuthContextProvider({ children }) {
  const [isAuthenticatedState, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={isAuthenticatedState}>
      {children}
    </AuthContext.Provider>
  );
}
