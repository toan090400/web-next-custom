import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
//
import RoomPage from "../../components/Room/room";
import PaginationPage from "../../components/Pagination/pagination";
import Layout from "../../context/layout";
const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [page, setPage] = useState("");
  const [page_total, setPage_Total] = useState();
  useEffect(() => {
    const getAllRooms = async () => {
      try {
        const getAllRooms = await axios.get(
          `http://localhost:3000/api/rooms?page=${page}`
        );
        setRooms(getAllRooms.data.rooms);
        setPage(getAllRooms.data.page);
        setPage_Total(getAllRooms.data.page_total);
      } catch (error) {
        console.log(error);
      }
    };
    getAllRooms();
  }, []);
  return (
    <>
      <Head>
        <title>Room Page</title>
        <meta name="description" content="Room Page" />
        <link rel="icon" href="/icon-1.jpg" />
      </Head>
      <Layout>
        <RoomPage roomData={rooms} />
        <PaginationPage
          Page_Total={page_total}
          Page={page}
          PageLink={`/room/page`}
          PageLinkIndex={`/room`}
        />
      </Layout>
    </>
  );
};

export default Room;
