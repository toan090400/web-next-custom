import Head from "next/head";
import { useRouter } from "next/router";
//
import InformationPage from "../../components/User/information";
import Layout from "../../context/layout";
export default function Information() {
  const r = useRouter();
  console.log(r.query.id);
  return (
    <>
      <Head>
        <title>Information</title>
        <meta name="description" content="Information" />
        <link rel="icon" href="/icon-1.jpg" />
      </Head>
      <Layout>{/* <InformationPage /> */}</Layout>
    </>
  );
}
