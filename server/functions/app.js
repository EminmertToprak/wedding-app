const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		console.log('MongoDB connected');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
		process.exit(1);
	}
};
connectDB();

// Routes
const rsvpRoutes = require('./routes/rsvpRoutes');
app.use('/rsvp', rsvpRoutes);

// Test route
app.get('/hello', (req, res) => {
	res.send('Hello from Express.js running on Netlify!');
});

// Error handler
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Internal Server Error');
});

module.exports = app;
