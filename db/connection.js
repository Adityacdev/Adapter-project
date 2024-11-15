import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('your_mongodb_connection_string', {
      dbName: 'storeDB', // Replace 'storeDB' with your database name if needed
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
