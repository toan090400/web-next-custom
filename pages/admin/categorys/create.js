import CategoryAdminCreatePage from "../../../components/Admin/Categorys/create";
import LayoutAdmin from "../../../context/layoutAdmin";
import Message from "../../../components/Message/message";
import AuthContext from "../../../context/auth";
//
import Head from "next/head";
import { useState, useContext } from "react";
import axios from "axios";
const CategoryCreate = () => {
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState({});
  const context = useContext(AuthContext);
  const accessToken = context.isUser.accessToken;
  const newData = async (item) => {
    try {
      const category = await axios.post(
        "http://localhost:3000/api/categorys",
        item,
        { headers: { token: `User ${accessToken}` } }
      );
      const dataCategory = category.data;
      setStatus(true);
      setMessage(dataCategory);
    } catch (error) {
      console.log(error.response.data);
      const dataCategory = error.response.data;
      setStatus(true);
      setMessage(dataCategory);
    }
  };
  const setStatusMessage = (item) => {
    setStatus(item);
  };
  return (
    <>
      <Head>
        <title>Admin Category Create</title>
        <meta name="description" content="Admin Category Create" />
        <link rel="icon" href="/icon-4.png" />
      </Head>
      <LayoutAdmin>
        {status && (
          <Message
            setStatusDataTrue={status}
            setStatusDataFalse={setStatusMessage}
            messageData={message}
          />
        )}
        <CategoryAdminCreatePage createData={newData} />
      </LayoutAdmin>
    </>
  );
};

export default CategoryCreate;
