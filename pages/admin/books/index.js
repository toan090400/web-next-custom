import BookAdminListPage from "../../../components/Admin/Books/list";
import LayoutAdmin from "../../../context/layoutAdmin";
import Message from "../../../components/Message/message";
//
import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
const Book = ({ data }) => {
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState({});
  const [getBooks, setBooks] = useState(data);
  //get data
  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const getAllBooks = await axios.get("http://localhost:3000/api/books");
        setBooks(getAllBooks.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllBooks();
  }, [status]);
  // delete
  const deleteItem = async (item) => {
    try {
      const itemId = await item._id;
      const deleteBook = await axios.delete(
        `http://localhost:3000/api/books/${itemId}`
      );
      setMessage(deleteBook.data);
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
        <title>Admin Book List</title>
        <meta name="description" content="Admin Book List" />
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
        <BookAdminListPage bookData={getBooks} deteteData={deleteItem} />
      </LayoutAdmin>
    </>
  );
};

export default Book;
// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/api/books");
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/books`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
