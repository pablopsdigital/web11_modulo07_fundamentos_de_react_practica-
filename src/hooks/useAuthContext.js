import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export default function useAuthContextHook() {
  //Access state with value isAuthenticatedState
  const isAuthenticatedState = useContext(AuthContext);
  return isAuthenticatedState;
}
