import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
db();

import { allRoom } from "../../../controllers/roomController";

const handler = nextConnect();

handler.get(allRoom);

export default handler;
