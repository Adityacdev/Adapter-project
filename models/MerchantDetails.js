// models/MerchantDetails.js
import mongoose from 'mongoose';

const merchantDetailsSchema = new mongoose.Schema({
  merchantName: String,
  merchantPhoneNumber: String,
  merchantStatus: String,
});

export default mongoose.model('MerchantDetails', merchantDetailsSchema);
