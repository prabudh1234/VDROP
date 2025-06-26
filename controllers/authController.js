// controllers/authController.js
const User = require("../models/User");

const sendOtp = async (req, res) => {
  const { mobile } = req.body;
  const otp = Math.floor(1000 + Math.random() * 9000).toString();

  let user = await User.findOne({ mobile });
  if (!user) user = new User({ mobile });
  user.otp = otp;
  await user.save();

  // In real app, integrate with SMS provider here
  console.log(`OTP for ${mobile}: ${otp}`);

  res.json({ success: true, message: "OTP sent" });
};

const verifyOtp = async (req, res) => {
  const { mobile, otp } = req.body;
  const user = await User.findOne({ mobile });
  if (!user || user.otp !== otp) {
    return res.status(401).json({ success: false, message: "Invalid OTP" });
  }

  res.json({ success: true, message: "OTP verified", userId: user._id });
};

module.exports = { sendOtp, verifyOtp };