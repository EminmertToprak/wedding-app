const db = require('../service/db.mjs').default;
const RSVP = require('../models/rsvp.model');

export default async (req, context) => {
	if (req.method !== 'POST') {
		return new Response('BAD REQUEST', {
			status: 400,
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
		db.connectDB();
		await newRSVP.save();
	} catch (error) {
		console.error('Error submitting RSVP:', error);
		return new Response(`Error: ${error}`, {
			status: 400,
		});
	}
	return new Response(`SUCCESS!`);
};

export const config = {
	path: '/rsvp',
};
