import Room from "../models/roomModel";
const allRoom = async (req, res) => {
  try {
    const page_size = 1; // 1 trang hiện bao nhiêu sản phẩm
    const page = parseInt(req.query.page || "1"); //page hiện tại
    const total_item = await Room.countDocuments(); // đếm xem có bao nhiêu item hiện có
    const page_total = Math.ceil(total_item / page_size); // đếm xem mình sẽ có bao nhiêu trang
    const rooms = await Room.find()
      .limit(page_size)
      .skip(page_size * (page - 1));
    res.status(200).json({
      page,
      total_item,
      page_total,
      rooms,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};
export { allRoom };
