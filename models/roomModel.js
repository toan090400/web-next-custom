import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Room || mongoose.model("Room", RoomSchema);
