require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;

const hubspotAuth = require('./auth/hubspotAuth');
const callback = require('./auth/callback');

// Route to initiate HubSpot OAuth
app.get('/auth', hubspotAuth);

// Callback route for HubSpot OAuth
app.get('/callback', callback);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
