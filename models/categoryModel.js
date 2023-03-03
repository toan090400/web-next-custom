import mongoose from "mongoose";
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);
