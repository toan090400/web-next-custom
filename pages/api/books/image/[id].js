import nextConnect from "next-connect";

import db from "../../../../config/dbConnect";
db();

import { imageBook } from "../../../../controllers/bookController";

import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
// *** upload file cần thiết
export const config = {
  api: {
    bodyParser: false,
  },
};
const upload = multer({ storage, fileFilter });
const image = upload.single("image");

const handler = nextConnect();

handler.use(image);
handler.patch(imageBook);

export default handler;
