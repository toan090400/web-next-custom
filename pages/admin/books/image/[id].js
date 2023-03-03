import BookAdminImagePage from "../../../../components/Admin/Books/image";
import LayoutAdmin from "../../../../context/layoutAdmin";
import Message from "../../../../components/Message/message";
//
import Head from "next/head";
import axios from "axios";
import { useState } from "react";
const Book = ({ book }) => {
  const bookId = book.book._id;
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState({});
  const [getBook, setBook] = useState(book);
  const updateData = async (item) => {
    try {
      const bookEdit = await axios.patch(
        `http://localhost:3000/api/books/image/${bookId}`,
        item
      );
      setBook(bookEdit.data);
      setMessage(bookEdit.data);
      setStatus(true);
    } catch (error) {
      console.log(error);
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
        <title>Admin Book Image: {getBook.book.name}</title>
        <meta name="description" content="Admin Book Image" />
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
        <BookAdminImagePage bookData={getBook} updateData={updateData} />
      </LayoutAdmin>
    </>
  );
};

export default Book;
// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3000/api/books`);
//   const data = await res.json();
//   const book = data.books;
//   const paths = book.map((item) => {
//     return {
//       params: { id: item._id },
//     };
//   });
//   return {
//     paths,
//     fallback: false, // can also be true or 'blocking'
//   };
// }
// export async function getStaticProps(context) {
//   const item = context.params.id;
//   const res = await fetch(`http://localhost:3000/api/books/${item}`);
//   const book = await res.json();
//   return {
//     props: { book },
//   };
// }
export async function getServerSideProps(context) {
  const bookId = context.params.id;
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/books/${bookId}`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { book: data } };
}
