// models/Otp.js
import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
  phoneNumber: String,
  otp: String,
  createdAt: Date,
  updatedAt: Date,
});

export default mongoose.model('Otp', otpSchema);
