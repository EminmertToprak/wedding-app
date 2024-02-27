const express = require('express');
const connectDB = require('./db');
const cors = require('cors');

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
const corsOptions = {
	origin: 'https://silly-malabi-f9c192.netlify.app',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());

// Custom middleware to log requests (Server Logging)
app.use((req, res, next) => {
	console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
	next();
});

const rsvpRoutes = require('./routes/rsvpRoutes');

// Use RSVP routes
app.use('/rsvp', rsvpRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
