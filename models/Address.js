// models/Address.js
import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  fullName: String,
  addressName: String,
  address: String,
  addressLink1: String,
  addressLink2: String,
  city: String,
  state: String,
  zipCode: String,
  contactNo: String,
});

export default mongoose.model('Address', addressSchema);
