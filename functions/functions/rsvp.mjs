const db = require('../service/db.mjs').default;
const RSVP = require('../models/rsvp.model');

export default async (req, context) => {
	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST',
		'Access-Control-Allow-Headers': 'Content-Type',
	};

	// Apply CORS headers to all responses
	const responseInit = {
		headers: headers,
	};

	// Check if it's an OPTIONS request and handle it separately
	if (req.method === 'OPTIONS') {
		return new Response(null, responseInit);
	}

	// Handle non-POST requests
	if (req.method !== 'POST') {
		return new Response('BAD REQUEST', {
			status: 400,
			headers: headers,
		});
	}

	try {
		const chunks = [];
		for await (const chunk of req.body) {
			chunks.push(chunk);
		}
		const bodyBuffer = Buffer.concat(chunks);
		const requestBody = JSON.parse(bodyBuffer.toString());
		const newRSVP = new RSVP(requestBody);
		db();
		await newRSVP.save();
		return new Response(`SUCCESS!`, responseInit);
	} catch (error) {
		console.error('Error submitting RSVP:', error);
		return new Response(`Error: ${error}`, {
			status: 400,
			headers: headers,
		});
	}
};

export const config = {
	path: '/rsvp',
};
