const express = require('express');
const app = express()
require('dotenv').config()
const cors = require("cors")
const dbConnect = require('./config/dbConnect');
const port = process.env.PORT || 5000

const authRouter = require("./routes/authRoute");
const dutyDetails = require("./routes/dutyDetailsRoute")
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middleware/errorHandler');



dbConnect()

// Middle ware
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static("public"));



app.use("/api/user", authRouter)
app.use("/api/dutyDetails/", dutyDetails)
app.use(notFound)
app.use(errorHandler)


app.get('/', (req, res) => {
    res.send('DhakaCars.com server is running')
})
app.listen(port, () => {
    console.log(`DhakaCars server is running on: ${port}`);
})