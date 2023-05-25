const {
  createBlogService,
  getAllBlogService,
  getBlogByIdService,
  getBlogByEmailService,
  updateBlogService,
  deleteBlogService,
} = require("../services/blog.services");

exports.createBlog = async (req, res) => {
  try {
    const result = await createBlogService(req.body);
    res.status(200).json({
      status: "seccess",
      message: "Create blog successfull",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      message: "Can't Create blog",
      error: error.message,
    });
  }
};
exports.getAllBlog = async (req, res) => {
  try {
    const result = await getAllBlogService();
    res.status(200).json({
      status: "seccess",
      message: "Get all blog successfull",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      message: "No blog found",
      error: error.message,
    });
  }
};
exports.getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getBlogByIdService(id);
    res.status(200).json({
      status: "seccess",
      message: "Get blog by id successfull",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      message: "No blog found",
      error: error.message,
    });
  }
};
exports.getBlogByEmail = async (req, res) => {
  try {
    const { email } = req?.query;
    const query = { email: email };
    const result = await getBlogByEmailService(query);
    res.status(200).json({
      status: "seccess",
      message: "Get blog by email successfull",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      message: "No blog found",
      error: error.message,
    });
  }
};
exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateBlogService(id, req.body);
    res.status(200).json({
      status: "seccess",
      message: "update blog successfull",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      message: "No blog found",
      error: error.message,
    });
  }
};
exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteBlogService(id);
    res.status(200).json({
      status: "seccess",
      message: "delete blog successfull",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      status: "fail",
      message: "No blog found",
      error: error.message,
    });
  }
};