const { createBookingService, getBookingService, getBookingServiceByEmail, getBookingServiceById, updateBookingService, deleteBookingService } = require("../services/booking.services")

exports.createBooking = async(req, res)=>{
    try {
        const data = await createBookingService(req.body)

        res.status(200).json({
            status: "success",
            message: "create booking successfull",
            data: data
        })
    } catch (error) {
        res.status(200).json({
            status: "fail",
            message: "can't create booking",
            error: error.message
        })
    }
}
exports.getBooking = async(req, res)=>{
    try {
        const result = await getBookingService()

        res.status(200).json({
            status: "success",
            message: "get all booking successfull",
            data: result
        })
    } catch (error) {
        res.status(200).json({
            status: "fail",
            message: "no found booking",
            error: error.message
        })
    }
}
exports.getBookingByEmail = async(req, res)=>{
    console.log(req.query)
    try {
        const {email} = req?.query;
        const query = {email: email}
        const result = await getBookingServiceByEmail(query)
        res.status(200).json({
            status: "success",
            message: "get booking by email successfull",
            data: result
        })
    } catch (error) {
        res.status(200).json({
            status: "fail",
            message: "no found booking",
            error: error.message
        })
    }
}
exports.getBookingById = async(req, res)=>{
    
    try {
        const {id} = req.params
        const result = await getBookingServiceById(id)

        res.status(200).json({
            status: "success",
            message: "get booking by id successfull",
            data: result
        })
    } catch (error) {
        res.status(200).json({
            status: "fail",
            message: "no found booking",
            error: error.message
        })
    }
}
exports.updateBooking = async(req, res)=>{
    
    try {
        const {id} = req.params
        const result = await updateBookingService(id, req.body)

        res.status(200).json({
            status: "success",
            message: "update booking by id successfull",
            data: result
        })
    } catch (error) {
        res.status(200).json({
            status: "fail",
            message: "coun't update booking",
            error: error.message
        })
    }
}
exports.deleteBooking = async(req, res)=>{
    
    try {
        const {id} = req.params
        const result = await deleteBookingService(id)

        res.status(200).json({
            status: "success",
            message: "delete booking successfull",
            data: result
        })
    } catch (error) {
        res.status(200).json({
            status: "fail",
            message: "coun't delete booking",
            error: error.message
        })
    }
}

