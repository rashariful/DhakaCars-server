const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const bookingSchema = mongoose.Schema(
  {
    email: {
      type: String,
      validate: [validator.isEmail, "Plese Provide a valid Email"],
      trim: true,
      lowercase: true,
      require: [true, "Email address is required"],
    },

    userName: {
      type: String,
      require: [true, "Please provide a user name"],
      trim: true,
    },

    phoneNumber: {
      type: String,
      validate: [
        validator.isMobilePhone,
        "Please provide a valid contact number",
      ],
    },
    carType:{
        type:String,
        enum:["sedan","noah","hiace", "microbus"],
      lowercase: true,
    },
    pickupDateTime: {
        type: String,
        require: true
    },
    PickUpLocation: {
        type: String,
        require: true
    },
    note: {
        type: String,
    },
    status: {
        type: String,
        enum:["book", "processing", "confirm", "rejected"],
        default: "processing"
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
