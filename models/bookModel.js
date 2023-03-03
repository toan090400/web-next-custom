import mongoose from "mongoose";
const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    imageGogle: {
      type: Object,
      default: false,
    },
    imageLink: {
      type: String,
      default: "https://lh3.googleusercontent.com/d",
    },
    categoryId: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
      },
    ],
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Book || mongoose.model("Book", BookSchema);
