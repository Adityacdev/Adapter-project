// models/OrderTransaction.js
import mongoose from 'mongoose';

const orderTransactionSchema = new mongoose.Schema({
  netAmt: String,
  totalQty: String,
  currency: String,
  transactionType: String,
  orderId: String,
});

export default mongoose.model('OrderTransaction', orderTransactionSchema);
