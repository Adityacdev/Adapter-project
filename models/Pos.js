// models/Pos.js
import mongoose from 'mongoose';

const posSchema = new mongoose.Schema({
  storeId: Number,
  posStatus: String,
  merchantId: Number,
  posManufacturing: String,
});

export default mongoose.model('Pos', posSchema);
