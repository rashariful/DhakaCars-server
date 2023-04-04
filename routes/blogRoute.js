const express = require("express");
const blogController = require("../controllers/blog.controller");
const router = express.Router()

router.route("/")
.post(blogController.createBlog)
.get(blogController.getAllBlog)
router.get("/admin", blogController.getBlogByEmail)

router.route("/:id")
.get(blogController.getBlogById)
.delete(blogController.deleteBlog)
.patch(blogController.updateBlog)


module.exports = router