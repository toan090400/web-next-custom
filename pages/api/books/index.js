import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
db();

import { allBook, newBook } from "../../../controllers/bookController";
import { verifyToken, checkAdmin } from "../../../public/middleware/jwt";

const handler = nextConnect();

handler.get(allBook);
handler.post(verifyToken, checkAdmin, newBook);

export default handler;
