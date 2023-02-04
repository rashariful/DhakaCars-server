const express = require("express")
const router = express.Router()
const {
    createDutyDetails,
    getSingleDutyDetails,
    getAllDutyDetails,
    getSingleDutyDetailsByEmail,
    updateDutyDetails,
    deleteDutyDetails
} = require("../controllers/dutyDetailsCtrl")

const { authMiddleware, isAdmin } = require("../middleware/authMiddleware")

router.post("/", createDutyDetails)
router.get("/:id", authMiddleware, isAdmin, getSingleDutyDetails)
router.put("/:id", authMiddleware, isAdmin, updateDutyDetails)
router.delete("/:id", authMiddleware, isAdmin, deleteDutyDetails)
router.get("/", getAllDutyDetails)
router.get("/", getSingleDutyDetailsByEmail)

module.exports = router