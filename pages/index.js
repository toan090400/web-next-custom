import Head from "next/head";
//
import HomePage from "../components/Home/home";
import Layout from "../context/layout";
export default function Home({ data }) {
  const books = data.books;
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/icon-1.jpg" />
      </Head>
      <Layout>
        <HomePage bookData={books} />
      </Layout>
    </>
  );
}
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
