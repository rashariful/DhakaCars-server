const express = require("express");
const router = express.Router()

const bookingController = require("../controllers/booking.controller")

router.route("/")
.post(bookingController.createBooking)
.get(bookingController.getBooking)
router.get("/merchant", bookingController.getBookingByEmail)

router.route("/:id")
.delete(bookingController.deleteBooking)
.patch(bookingController.updateBooking)
.get(bookingController.getBookingById)

module.exports = router