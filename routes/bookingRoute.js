const express = require("express");
const router = express.Router()

const bookingController = require("../controllers/booking.controller")

router.route("/")
.get(bookingController.getBooking)
.post(bookingController.createBooking)
router.get("/merchant", bookingController.getBookingByEmail)

router.route("/:id")
.delete(bookingController.deleteBooking)
.patch(bookingController.updateBooking)
.get(bookingController.getBookingById)
router.route("/:id/status").put(bookingController.updateBookingStatusController)

module.exports = router