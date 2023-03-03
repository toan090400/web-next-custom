import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
import {
  getBook,
  updateBook,
  deleteBook,
} from "../../../controllers/bookController";

db();

const handler = nextConnect();

handler.get(getBook);
handler.patch(updateBook);
handler.delete(deleteBook);

export default handler;
