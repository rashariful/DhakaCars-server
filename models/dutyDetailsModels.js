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
    email: {
        type: String,
        required: true,
    },

    cngCost: {
        type: Number,
    },
    pickUpDate: {
        type: String,
        require: true
    },
    startTime: {
        type: String,
        require: true
    },
    endTime: {
        type: String,
        require: true
    },
    startKm: {
        type: Number,
        require: true
    },
    endKm: {
        type: Number,
        require: true
    },
    overTime: {
        type: Number,
    },
    tollParking: {
        type: Number,
    },
    lunch: {
        type: String,
    },
    dinner: {
        type: String,
    },
    
},
    {
        timestamps: true
    }
);
//Export the model
module.exports = mongoose.model('DutyDetails', dutyDetailsSchema);