const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3001;
const app = express();

const uri =
	'mongodb+srv://new-user_31:test31@personalcluster.mhlbkqw.mongodb.net/?retryWrites=true&w=majority';
const clientOptions = {
	serverApi: { version: '1', strict: true, deprecationErrors: true },
};

// Middleware

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
	.connect(uri, clientOptions)
	.then(() => {
		console.log('Connected to MongoDB');
		app.listen(port, () => {
			console.log(`Server is running on port ${port}`);
		});
	})
	.catch((err) => console.error('Error connecting to MongoDB', err));

app.post('/rsvp', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const dietary = req.body.dietary;
	const attending = req.body.attending;
	const plusOne = req.body.plusOne;
	const guestName = req.body.guestName;
	const plusOneDietary = req.body.plusOneDietary;
});
