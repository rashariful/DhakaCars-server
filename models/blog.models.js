const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    blogTitle:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    blogCategory:{
        type:String,
        enum: ["latest", "populer", "must views"]
    },
    email:{
        type:String,
    },
},{timestamps: true});

//Export the model
module.exports = mongoose.model('Blog', blogSchema);