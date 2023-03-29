const { mongoose } = require("mongoose")

const dbConnect = () =>{
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Database is Successfully Connected")
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = dbConnect


