import express from 'express';
import mongoose from 'mongoose';
import { fetchAndSaveData } from './controllers/dataController.js'; // Import the controller function

const app = express();
const port = 5000;

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/storeDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define the route for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Welcome to the API!');  // Send a welcome message or any information you'd like
});

// Define the route for fetching and saving data
app.get('/fetch-and-save', fetchAndSaveData);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

