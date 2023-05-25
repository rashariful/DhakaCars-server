const express = require("express");
const userController = require("../controllers/userCtrl");
const { verifyToken } = require("../middleware/authMiddleware");
const router = express.Router()

// router.route("/user/me").get(userController.getUser)
// router.route("/user/me" ).get(verifyToken,userController.getMe)
router.route("/singup").post(userController.createUser)
router.route("/login").post(userController.loginUser)
router.route("/admin/:email").get(userController.getAdminByEmailController)
router.route("/merchant/:email").get(userController.getMerchantByEmailController)
router.route("/buyer/:email").get(userController.getUserByEmailController)

module.exports = router