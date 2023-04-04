const Blog = require("../models/blog.models")

exports.createBlogService = async (data) =>{
    return result = await Blog.create(data)
}
exports.getAllBlogService = async () =>{
    return result = await Blog.find({})
}
exports.getBlogByIdService = async (id) =>{
    return result = await Blog.find({_id: id})
}
exports.getBlogByEmailService = async (email) =>{
    return result = await Blog.find(email)
}
exports.updateBlogService = async (id, blogInfo) =>{
    return result = await Blog.updateOne({_id: id}, {$set: blogInfo})
}
exports.deleteBlogService = async (id) =>{
    return result = await Blog.deleteOne({_id: id})
}