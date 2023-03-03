import nextConnect from "next-connect";

import db from "../../../config/dbConnect";
import { login } from "../../../controllers/authController";

db();

const handler = nextConnect();

handler.post(login);

export default handler;
