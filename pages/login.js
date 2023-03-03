import Head from "next/head";
import { useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
//
import LoginPage from "../components/Login/login";
import Message from "../components/Message/message";
import AuthContext from "../context/auth";
const Login = () => {
  // set up message
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState();
  //
  const context = useContext(AuthContext);
  const router = useRouter();
  const login = async (item) => {
    try {
      const register = await axios.post(
        "http://localhost:3000/api/auth/login",
        item
      );
      const dataLogin = register.data;
      await context.onLogin(dataLogin);
      await router.push("/");
    } catch (error) {
      console.log(error.response.data);
      const dataLogin = error.response.data;
      setStatus(true);
      setMessage(dataLogin);
    }
  };
  const setStatusMessage = (item) => {
    setStatus(item);
  };
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/icon-1.jpg" />
      </Head>
      {status && (
        <Message
          setStatusDataTrue={status}
          setStatusDataFalse={setStatusMessage}
          messageData={message}
        />
      )}
      <LoginPage loginData={login} />
    </>
  );
};

export default Login;
