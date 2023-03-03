import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
import { allUser, newUser } from "../../../controllers/authController";

db();

const handler = nextConnect();

handler.get(allUser);
handler.post(newUser);

export default handler;
