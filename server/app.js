const express = require('express');
const connectDB = require('./db');

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
const cors = require('cors');

const corsOptions = {
	origin: true,
	credentials: true,
};

// app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // preflight OPTIONS; put before other routes

app.use(express.json());

// Custom middleware to log requests (Server Logging)
app.use((req, res, next) => {
	console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
	next();
});

const registerRsvp = require('./routes/rsvpRoutes_2');

// Use RSVP routes
// app.use('/rsvp', rsvpRoutes);
registerRsvp(app);

app.get('/test', async (req, res) => {
	res.status(200).json({ message: 'test' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
