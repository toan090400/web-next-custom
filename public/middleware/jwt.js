import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(404).json({
        success: false,
        message: "Bạn chưa đăng nhập.",
      });
    }
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: "Token đã hết hạn.",
        });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const checkAdmin = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(404).json({
        success: false,
        message: "Bạn không phải là Admin.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
export { verifyToken, checkAdmin };
