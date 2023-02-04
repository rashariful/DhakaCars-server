const express = require('express');
const app = express()
require('dotenv').config()
const cors = require("cors")
const dbConnect = require('./config/dbConnect');
const port = process.env.PORT || 5000

const bodyParser = require('body-parser');
dbConnect()
// Middle ware
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('DhakaCars.com server is running')
})
app.listen(port, () => {
    console.log(`DhakaCars server is running on: ${port}`);
})