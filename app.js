const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/authRoute");
const dutyDetails = require("./routes/dutyDetailsRoute")
const booking = require("./routes/bookingRoute")
const blog = require("./routes/blogRoute")

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("DhakaCars is running");
});

app.use("/api/v1/user", authRouter)
app.use("/api/v1/dutyDetails", dutyDetails)
app.use("/api/v1/booking", booking)
app.use("/api/v1/blog", blog)

module.exports = app; 
