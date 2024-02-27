const express = require('express');
const router = express.Router();
const cors = require('cors');

// RSVP Model
const RSVP = require('../models/rsvp.model');

// Route to handle RSVP submissions
router.post('/submit', cors(), async (req, res) => {
	try {
		const rsvpData = req.body;
		const newRSVP = new RSVP(rsvpData);
		await newRSVP.save();
		res.status(201).json({ message: 'RSVP submitted successfully' });
	} catch (error) {
		console.error('Error submitting RSVP:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
});

module.exports = router;
