import { createContext, useContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("accessTokenOfUser"));
  // const [tokenOfInstructor, setTokenOfInstructor] = useState(
  //   localStorage.getItem("accessToken")
  // );
  const storeTokenInLS = (servertoken) => {
    return localStorage.setItem(
      "accessTokenOfUser",
      JSON.stringify(servertoken)
    );
  };
  //Logout
  let isLoggedIn = !!token;
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("accessTokenOfUser");
  };
  return (
    <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
