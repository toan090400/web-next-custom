import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [getUser, setIsUser] = useState({});

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("userData");
    if (storedUserLoggedInInformation) {
      const user = JSON.parse(storedUserLoggedInInformation);
      setIsUser(user);
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (item) => {
    const userData = item;
    const userLocalStorage = JSON.stringify(userData);
    localStorage.setItem("userData", userLocalStorage);
    setIsUser(userData);
    setIsLoggedIn(true);
  };

  const router = useRouter();
  const logoutHandler = () => {
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    setIsUser({});
    router.push("/login");
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        isUser: getUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
