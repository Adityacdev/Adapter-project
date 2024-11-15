// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  email: String,
  phoneNumber: String,
  address: [String],
  created: Date,
});

export default mongoose.model('User', userSchema);
