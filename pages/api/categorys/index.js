import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
db();

import {
  allCategory,
  newCategory,
} from "../../../controllers/categoryController";

import { verifyToken, checkAdmin } from "../../../public/middleware/jwt";

const handler = nextConnect();

handler.get(allCategory);
handler.post(verifyToken, checkAdmin, newCategory);

export default handler;
