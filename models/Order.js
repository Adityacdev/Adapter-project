// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  uuid: String,
  storeId: String,
  storeOrderId: Number,
  posId: String,
  merchantId: String,
  sourceInfo: String,
  userId: String,
  address: {
    fullName: String,
    addressName: String,
    address: String,
    addressLink1: String,
    addressLink2: String,
    city: String,
    state: String,
    zipCode: String,
    contactNo: String,
  },
});

export default mongoose.model('Order', orderSchema);
