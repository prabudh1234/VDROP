// routes/rideRoutes.js
const express = require("express");
const router = express.Router();
const { bookRide, getRideStatus } = require("../controllers/rideController");

router.post("/book", bookRide);
router.get("/status/:rideId", getRideStatus);

module.exports = router;