import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
import {
  getCategory,
  updateCategory,
  deleteCategory,
} from "../../../controllers/categoryController";

db();

const handler = nextConnect();

handler.get(getCategory);
handler.patch(updateCategory);
handler.delete(deleteCategory);

export default handler;
