// models/StoreDetails.js
import mongoose from 'mongoose';

const storeDetailsSchema = new mongoose.Schema({
  adapterUrl: String,
  ecommerceUserName: String,
  ecommerceUrl: String,
  posId: String,
  storeStatus: String,
  merchantId: String,
  storeAddress: String,
  storeEmailAddress: String,
  storePhoneNumber: String,
  ecommerceUserPassword: String,
  location: {
    type: { type: String },
    coordinates: [Number],
  },
  shopOpeningHours: Array,
  rating: Number,
  imageLink: String,
  additionalData: Array,
});

export default mongoose.model('StoreDetails', storeDetailsSchema);
