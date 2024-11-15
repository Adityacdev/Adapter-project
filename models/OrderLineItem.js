import mongoose from 'mongoose';

const orderLineItemSchema = new mongoose.Schema({
  orderItems: Array,
  brandProductId: String,
  productName: String,
  price: String,
  quantity: String,
  orderId: String,
});

export default mongoose.model('OrderLineItem', orderLineItemSchema);
