const Booking = require("../models/booking.models");

exports.createBookingService = async(data)=>{
    const result = await Booking.create(data)
    return result
}
exports.getBookingServiceByEmail = async(email) =>{
    const result = await Booking.find(email)
    return result
}

exports.getBookingService = async(search)=>{
    return result = await Booking.find({"carType": {$regex: ".*"+search+".*", $options: "i"}})
}

exports.getBookingServiceById = async(id) =>{
    return result = await Booking.findOne({_id: id})
}
exports.updateBookingService = async (updateid, data) =>{
    return result = await Booking.updateOne({_id: updateid}, {$set: data})
}
exports.deleteBookingService = async (deleteid) =>{
    return result = await Booking.deleteOne({_id: deleteid})
}
