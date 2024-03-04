const db = require('../service/db');
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
		console.log(bodyBuffer);
	}
	return new Response(`Your mongoDB URI is: ${Netlify.env.get('MONGODB_URI')}`);
};

export const config = {
	path: '/rsvp',
};
