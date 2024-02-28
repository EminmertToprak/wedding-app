const express = require('express');
const connectDB = require('../db');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
	console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
	next();
});

app.get('/', (req, res) => {
	res.send('Hello from Express.js running on Netlify!');
});

const registerRsvp = require('../routes/rsvpRoutes_2');

registerRsvp(app);

module.exports.handler = async (event, context) => {
	connectDB();
	const { path, httpMethod, queryStringParameters, body } = event;
	const req = {
		method: httpMethod,
		body: JSON.parse(body),
		query: queryStringParameters,
		path,
	};
	const res = {
		statusCode: 200,
		_body: '',
		send: (body) => {
			res._body = body;
		},
	};

	await app(req, res);

	return {
		statusCode: res.statusCode,
		body: res._body,
	};
};

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
