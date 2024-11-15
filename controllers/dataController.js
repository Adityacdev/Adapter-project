import axios from 'axios';
import { StoreDetails } from '../models/index.js'; // Adjust model imports as needed

const apiUrl = 'https://mocki.io/v1/9ccf0fce-5571-4654-9632-9554c96f7476';  // Example API URL

const fetchAndSaveData = async (req, res) => {
  try {
    // Fetch data from the external API
    const response = await axios.get(apiUrl);
    const apiData = response.data;

    // Log the fetched data to inspect its structure
    console.log('Fetched API Data:', apiData);

    // Check if apiData.data.data is an array
    if (Array.isArray(apiData.data.data)) {
      // If it's an array, map over it and process
      const dataToSave = apiData.data.data.map(item => {
        return {
          name: item.productMeta.product_name,
          price: item.productMeta.offerPrice,
          // Add other fields here as needed
        };
      });

      // Save the processed data to MongoDB (using StoreDetails or other models)
      await StoreDetails.insertMany(dataToSave);
      res.status(200).json({ message: 'Data saved successfully!' });
    } else {
      // If it's not an array, handle it accordingly
      res.status(400).json({ message: 'API data is not an array', data: apiData });
    }
  } catch (err) {
    console.error('Error saving data:', err);
    res.status(500).json({ message: 'Error saving data', error: err });
  }
};

export { fetchAndSaveData };  // Export the controller function for use in server.js
