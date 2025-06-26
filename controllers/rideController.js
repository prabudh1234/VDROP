// controllers/rideController.js
const Ride = require("../models/Ride");

const bookRide = async (req, res) => {
  const { userId, source, destination, rideType } = req.body;

  const ride = new Ride({ userId, source, destination, rideType });
  await ride.save();

  res.json({ success: true, rideId: ride._id, message: "Ride booked successfully" });
};

const getRideStatus = async (req, res) => {
  const { rideId } = req.params;
  const ride = await Ride.findById(rideId);

  if (!ride) {
    return res.status(404).json({ success: false, message: "Ride not found" });
  }

  res.json({ success: true, status: ride.status });
};

module.exports = { bookRide, getRideStatus };
