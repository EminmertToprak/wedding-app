const express = require('express');
const connectDB = require('./db');
const cors = require('cors');

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

const rsvpRoutes = require('./routes/rsvpRoutes');

// Use RSVP routes
app.use('/rsvp', rsvpRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
