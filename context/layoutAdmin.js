import LayoutAdminPage from "../components/Layout/layoutAdmin";
import AuthContext from "../context/auth";
//
import { useContext } from "react";
const Layout = ({ children }) => {
  const context = useContext(AuthContext);
  const userData = context.isUser.user;
  return (
    <>
      <LayoutAdminPage userData={userData} />
      {children}
    </>
  );
};

export default Layout;
