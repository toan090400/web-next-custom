import CategoryAdminListPage from "../../../components/Admin/Categorys/list";
import LayoutAdmin from "../../../context/layoutAdmin";
import Message from "../../../components/Message/message";
//
import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
const Category = ({ data }) => {
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState({});
  const [getCategorys, setCategorys] = useState(data);
  //get data
  useEffect(() => {
    const getAllCategorys = async () => {
      try {
        const getAllCategorys = await axios.get(
          "http://localhost:3000/api/categorys"
        );
        setCategorys(getAllCategorys.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategorys();
  }, [status]);
  // delete
  const deleteItem = async (item) => {
    try {
      const itemId = await item._id;
      const deleteCategory = await axios.delete(
        `http://localhost:3000/api/categorys/${itemId}`
      );
      setMessage(deleteCategory.data);
      setStatus(true);
    } catch (error) {
      console.log(error);
    }
  };
  //
  const setStatusMessage = (item) => {
    setStatus(item);
  };
  return (
    <>
      <Head>
        <title>Admin Category List</title>
        <meta name="description" content="Admin Category List" />
        <link rel="icon" href="/icon-3.png" />
      </Head>
      <LayoutAdmin>
        {status && (
          <Message
            setStatusDataTrue={status}
            setStatusDataFalse={setStatusMessage}
            messageData={message}
          />
        )}
        <CategoryAdminListPage
          categoryData={getCategorys}
          deteteData={deleteItem}
        />
      </LayoutAdmin>
    </>
  );
};

export default Category;
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
