import BookAdminCreatePage from "../../../components/Admin/Books/create";
import LayoutAdmin from "../../../context/layoutAdmin";
import Message from "../../../components/Message/message";
import AuthContext from "../../../context/auth";
//
import Head from "next/head";
import { useState, useContext } from "react";
import axios from "axios";
const Create = ({ data }) => {
  const categorys = data.categorys;
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState({});
  const context = useContext(AuthContext);
  const accessToken = context.isUser.accessToken;
  const newData = async (item) => {
    try {
      const book = await axios.post("http://localhost:3000/api/books", item, {
        headers: { token: `User ${accessToken}` },
      });
      const dataBook = book.data;
      setStatus(true);
      setMessage(dataBook);
    } catch (error) {
      console.log(error.response.data);
      const dataBook = error.response.data;
      setStatus(true);
      setMessage(dataBook);
    }
  };
  const setStatusMessage = (item) => {
    setStatus(item);
  };
  return (
    <>
      <Head>
        <title>Admin Book Create</title>
        <meta name="description" content="Admin Book Create" />
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
        <BookAdminCreatePage createData={newData} categoryData={categorys} />
      </LayoutAdmin>
    </>
  );
};

export default Create;
// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/api/categorys");
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/categorys`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
