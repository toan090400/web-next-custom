import style from "../../styles/Layout.module.css";
import AuthContext from "../../context/auth";
import Link from "next/link";
import { useContext } from "react";
const Layout = ({ userData, isLogout, isLogin, loginData, menuData }) => {
  const data = {
    login: style.login_form,
    menu: style.navbar,
  };
  const handlerLogin = () => {
    loginData(data);
  };
  const handlerMenu = () => {
    menuData(data);
  };
  const handlerLogout = () => {
    isLogout();
  };
  return (
    <div className={style.index_container}>
      <header className={style.header}>
        <Link href="/" className={`${style.link} ${style.logo}`}>
          <i className="fas fa-shopping-basket"></i>{" "}
          {userData ? userData.username : "NextBook"}
        </Link>

        <nav className={style.navbar}>
          <Link className={style.link} href="/">
            Home
          </Link>
          <Link className={style.link} href="/room">
            Room
          </Link>
          {isLogin ? (
            <>
              {/* <Link className={style.link} href={`/user/${userData._id}`}>
                Information
              </Link> */}
              {userData.isAdmin && (
                <Link className={style.link} href="/admin/books">
                  Admin
                </Link>
              )}
            </>
          ) : (
            <Link className={style.link} href="/login">
              Login
            </Link>
          )}
        </nav>

        <div className={style.icons}>
          <div
            onClick={handlerMenu}
            className="fas fa-bars"
            id={style.menu_btn}
          ></div>
          {isLogin ? (
            <div
              onClick={handlerLogout}
              className="fa-solid fa-right-from-bracket"
              id="login-btn"
            ></div>
          ) : (
            <>
              {/* <div
                onClick={handlerLogin}
                className="fas fa-user"
                id="login-btn"
              ></div> */}
            </>
          )}
        </div>

        {/* <form action="" className={style.login_form}>
          <h3>Login Now</h3>
          <input type="email" placeholder="your email" className={style.box} />
          <p className={style.err_message}>err message</p>
          <input
            type="password"
            placeholder="your password"
            className={style.box}
          />
          <p className={style.err_message}>err message</p>
          <p className={style.text}>
            Forget your password <Link href="/">Click here</Link>
          </p>
          <p className={style.text}>
            Don't have an account <Link href="/">Create now</Link>
          </p>
          <button type="submit" className={style.btn}>
            Login
          </button>
        </form> */}
      </header>
    </div>
  );
};

export default Layout;
