const mongoose = require("mongoose"); // <-- Add this line

const RideSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  source: String,
  destination: String,
  rideType: String, // car, auto, bike, truck, etc.
  status: { type: String, default: "pending" }, // pending, accepted, on-the-way, completed
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Ride", RideSchema);