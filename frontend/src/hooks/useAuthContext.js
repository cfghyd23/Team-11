import { AuthContext } from "../context/authContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("authContext must be used inside an AuthContext Provide");
  }
  return context;
};
