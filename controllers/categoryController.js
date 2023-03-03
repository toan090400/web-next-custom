import Category from "../models/categoryModel";
import User from "../models/userModel";
const allCategory = async (req, res) => {
  try {
    const categorys = await Category.find().populate({
      path: "userId",
      select: "username -_id",
      User,
    });
    res.status(200).json({
      success: true,
      count: categorys.length,
      categorys,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.query.id).populate({
      path: "userId",
      select: "username -_id",
      User,
    });
    res.status(200).json({
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const newCategory = async (req, res) => {
  try {
    const userId = req.user.id;
    const name = req.body.name;
    const description = req.body.description;
    // check
    const category = await Category.findOne({ name: name });
    if (category) {
      const name = await category.name;
      return res.status(404).json({
        success: false,
        message: `"${name}" đã tồn tại.`,
      });
    }
    // create
    const newCategory = await new Category({
      name: name,
      description: description,
      userId: userId,
    });
    await newCategory.save();
    const message = await newCategory.name;
    res.status(200).json({
      success: true,
      message: `Thêm "${message}" thành công.`,
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
    });
    const name = await category.name;
    res.status(200).json({
      success: true,
      message: `Update "${name}" thành công`,
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.query.id);
    const message = await category.name;
    res.status(200).json({
      success: true,
      message: `Delete "${message}" thành công`,
      category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
export {
  allCategory,
  newCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
