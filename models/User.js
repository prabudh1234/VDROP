// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  mobile: { type: String, required: true, unique: true },
  otp: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);