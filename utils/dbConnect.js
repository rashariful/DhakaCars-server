const { mongoose } = require("mongoose")
const colors = require ("colors")

const dbConnect = () =>{
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Database is Successfully Connected".bold.blue)
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = dbConnect


