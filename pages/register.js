import Head from "next/head";
import { useState } from "react";
import axios from "axios";
//
import RegisterPage from "../components/Register/register";
import Message from "../components/Message/message";
const Register = () => {
  // set up message
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState({});
  //
  const register = async (item) => {
    try {
      const register = await axios.post("http://localhost:3000/api/auth", item);
      const dataRegister = register.data;
      setStatus(true);
      setMessage(dataRegister);
    } catch (error) {
      console.log(error.response.data);
      const dataRegister = error.response.data;
      setStatus(true);
      setMessage(dataRegister);
    }
  };
  const setStatusMessage = (item) => {
    setStatus(item);
  };
  return (
    <>
      <Head>
        <title>Register Page</title>
        <meta name="description" content="Register Page" />
        <link rel="icon" href="/icon-1.jpg" />
      </Head>
      {status && (
        <Message
          setStatusDataTrue={status}
          setStatusDataFalse={setStatusMessage}
          messageData={message}
        />
      )}
      <RegisterPage registerData={register} />
    </>
  );
};

export default Register;
