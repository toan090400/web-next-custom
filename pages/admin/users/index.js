import UserAdminListPage from "../../../components/Admin/Users/list";
import LayoutAdmin from "../../../context/layoutAdmin";
//
import Head from "next/head";
const User = ({ data }) => {
  const users = data.users;
  return (
    <>
      <Head>
        <title>Admin User List</title>
        <meta name="description" content="Admin User List" />
        <link rel="icon" href="/icon-3.png" />
      </Head>
      <LayoutAdmin>
        <UserAdminListPage userData={users} />
      </LayoutAdmin>
    </>
  );
};

export default User;
// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/api/auth");
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/auth`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
