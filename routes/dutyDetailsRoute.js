const express = require("express");
const router = express.Router();
const {
  createDutyDetails,
  getSingleDutyDetails,
  getAllDutyDetails,
  getDutyDetailsByEmail,
  updateDutyDetails,
  deleteDutyDetails,
} = require("../controllers/dutyDetailsCtrl");

const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");

router.get("/", getAllDutyDetails);
router.get("/merchant", getDutyDetailsByEmail);
router.post("/", createDutyDetails);
router.get("/:id", getSingleDutyDetails);
router.put("/:id", authMiddleware, isAdmin, updateDutyDetails);
router.delete("/:id", deleteDutyDetails);

module.exports = router;
