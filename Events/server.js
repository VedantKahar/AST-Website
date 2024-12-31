const cors = require('cors');
const express = require('express');
const axios = require('axios');
const path = require('path');  // Import path module
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

const apiKey = '6542fc55-57a4-4c4c-9472-384bc337f791';  // Your API key
const API_URL = 'https://holidayapi.com/v1/holidays';  // Correct URL for Holiday API

// Serve the events.html file when the root URL is accessed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'events.html')); // Serve events.html from the root directory
});

// API endpoint to fetch holidays
app.get('/holidays', async (req, res) => {
    const { country, year } = req.query;

    try {
        const response = await axios.get(API_URL, {
            params: {
                key: apiKey,  // Use the correct API key
                country: country || 'IN',  // Default to 'IN' (India) if no country is specified
                year: year || 2024,  // Default to 2024 if no year is specified
            },
        });
        res.json(response.data);  // Send the data back to the frontend
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch holidays' });
    }
});
app.get('/holiday', async (req, res) => {
    const { country, year } = req.query;

    try {
        const response = await axios.get(API_URL, {
            params: {
                key: apiKey,  // Use the correct API key
                country: country || 'IN',  // Default to 'IN' (India) if no country is specified
                year: year || 2024,  // Default to 2024 if no year is specified
            },
        });
        res.json(response.data);  // Send the data back to the frontend
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch holidays' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
