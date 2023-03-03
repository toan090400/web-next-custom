import UserAdminCreatePage from "../../../components/Admin/Users/create";
import LayoutAdmin from "../../../context/layoutAdmin";
//
import Head from "next/head";
import axios from "axios";
import { useState } from "react";
const User = () => {
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
  return (
    <>
      <Head>
        <title>Admin User Create</title>
        <meta name="description" content="Admin User Create" />
        <link rel="icon" href="/icon-4.png" />
      </Head>
      <LayoutAdmin>
        <UserAdminCreatePage
          registerData={register}
          statusMessage={status}
          messageData={message}
        />
      </LayoutAdmin>
    </>
  );
};

export default User;
