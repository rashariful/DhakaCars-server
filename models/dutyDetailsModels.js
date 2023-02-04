const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var dutyDetailsSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    driverName: {
        type: String,
        required: true,
    },
    driverNumber: {
        type: Number,
        required: true,
    },
    carNumber: {
        type: Number,
        required: true,
    },

    CNG: {
        type: Number,

    },
    pickUpDate: {
        type: Number,


    },


},
    {
        timestamps: true
    }
);

//Export the model
module.exports = mongoose.model('DutyDetails', dutyDetailsSchema);