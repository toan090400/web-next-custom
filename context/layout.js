import LayoutPage from "../components/Layout/layout";
import style from "../styles/Layout.module.css";
import AuthContext from "../context/auth";
//
import { useContext } from "react";
const Layout = ({ children }) => {
  const login = ({ login, menu }) => {
    // close
    const Menu = document.querySelector(`.${menu}`);
    Menu.classList.remove(style.active);
    // open
    const Login = document.querySelector(`.${login}`);
    Login.classList.toggle(style.active);
  };
  const menu = ({ menu }) => {
    // open
    const Menu = document.querySelector(`.${menu}`);
    Menu.classList.toggle(style.active);
  };
  //
  const context = useContext(AuthContext);
  const isLoggedIn = context.isLoggedIn;
  const userData = context.isUser.user;
  const logout = () => {
    context.onLogout();
  };
  return (
    <>
      <LayoutPage
        isLogout={logout}
        isLogin={isLoggedIn}
        loginData={login}
        menuData={menu}
        userData={userData}
      />
      {children}
    </>
  );
};

export default Layout;
