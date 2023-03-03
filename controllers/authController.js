import User from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const allUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.query.id);
    res.status(200).json({
      success: true,
      message: `Delete "${user.username}" thành công!`,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const newUser = async (req, res) => {
  try {
    const username = req.body.username;
    // check username
    const oldUser = await User.findOne({ username: username });
    if (oldUser) {
      return res.status(404).json({
        success: false,
        message: `Tài khoản "${oldUser.username}" đã tồn tại.`,
      });
    }
    // hash password
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);
    // save database
    const isAdmin = req.body.isAdmin;
    const newUser = await new User({
      username: username,
      password: passwordHashed,
      isAdmin: isAdmin,
    });
    const user = await newUser.save();
    // Ẩn password
    user.password = undefined;

    res.status(200).json({
      success: true,
      message: `Create "${user.username}" thành công.`,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const login = async (req, res) => {
  try {
    // Check username
    const username = req.body.username;
    const user = await User.findOne({ username: username }).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Username không tồn tại.",
      });
    }
    // Check password
    const password = req.body.password;
    const correct = await bcrypt.compare(password, user.password);
    if (!correct) {
      return res.status(404).json({
        success: false,
        message: "Password không chính xác.",
      });
    }
    // accessToken ngắn hạn
    const accessToken = await jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: process.env.JWT_ACCESS_EXPIRWS_IN }
    );
    // Ẩn password
    user.password = undefined;

    res.status(200).json({
      success: true,
      user,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};
export { allUser, newUser, deleteUser, login };
