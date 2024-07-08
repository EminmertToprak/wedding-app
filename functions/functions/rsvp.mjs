const db = require('../service/db.mjs');
const RSVP = require('../models/rsvp.model');

const sharedResponse = {
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET',
		'Access-Control-Allow-Headers': 'Content-Type',
	},
};

export default async (req, context) => {
	if (req.method === 'OPTIONS') return HandleOptions(req, context);
	if (req.method === 'POST') return HandlePost(req, context);
	if (req.method === 'GET') return HandleGet(req, context);

	return new Response('BAD REQUEST', {
		status: 400,
		headers: headers,
	});
};

//[OPTIONS] /rsvp
async function HandleOptions(req, context) {
	return new Response(null, sharedResponse);
}

//[POST] /rsvp
async function HandlePost(req, context) {
	try {
		var body = ParseRequestBody(req);
		const newRSVP = new RSVP(requestBody);
		db.connectDB();
		await newRSVP.save();
		return new Response(`SUCCESS!`, sharedResponse);
	} catch (error) {
		console.error('Error submitting RSVP:', error);
		return new Response(`Error: ${error}`, {
			status: 400,
			headers: sharedResponse.headers,
		});
	}
}

async function HandleGet(req, context) {
	try {
		db.connectDB();
		const rsvps = await RSVP.find();
		console.log(rsvps);
		return new Response(JSON.stringify(rsvps), sharedResponse);
	} catch (error) {
		console.error('Error getting RSVP:', error);
		return new Response(`Error: ${error}`, {
			status: 400,
			headers: sharedResponse.headers,
		});
	}
}
async function ParseRequestBody(req) {
	const chunks = [];
	for await (const chunk of req.body) {
		chunks.push(chunk);
	}
	const bodyBuffer = Buffer.concat(chunks);
	return JSON.parse(bodyBuffer.toString());
}

export const config = {
	path: '/rsvp',
};
