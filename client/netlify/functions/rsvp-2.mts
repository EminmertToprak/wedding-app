import { Config, Context } from '@netlify/functions';

const connectDb = require('./domain/service/db.mjs').default;
const RSVP = require('./domain/models/rsvp.model');

const sharedResponse = {
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, DELETE',
		'Access-Control-Allow-Headers': 'Content-Type',
	},
};

export default async (req: Request, context: Context) => {
	if (req.method === 'OPTIONS') return HandleOptions(req, context);
	if (req.method === 'POST') return HandlePost(req, context);
	if (req.method === 'GET') return HandleGet(req, context);
	if (req.method === 'DELETE') return HandleDelete(req, context);

	return new Response('BAD REQUEST', {
		status: 400,
		headers: sharedResponse.headers,
	});
};

//[OPTIONS] /rsvp
async function HandleOptions(req: Request, context: Context) {
	return new Response(null, sharedResponse);
}

//[POST] /rsvp
async function HandlePost(req: Request, context: Context) {
	try {
		let body = await ParseRequestBody(req as { body: ReadableStream<Uint8Array> });
		console.log(body);
		const newRSVP = new RSVP(body);
		connectDb();
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

async function HandleGet(req: Request, context: Context) {
    try {
        connectDb();

		const url = new URL(req.url);
  
		const skip = url.searchParams.get('skip');
		const take = url.searchParams.get('take');
		
		const skipNumber = skip ? parseInt(skip) : 0;
		const takeNumber = take ? parseInt(take) : 10;
		const rsvps = await RSVP.find().skip(skipNumber).limit(takeNumber);
        
        return new Response(JSON.stringify(rsvps), sharedResponse);
    } catch (error) {
        console.error('Error getting RSVP:', error);
        return new Response(`Error: ${error}`, {
            status: 400,
            headers: sharedResponse.headers,
        });
    }
}

async function HandleDelete(req: Request, context: Context) {
	let { id } = context.params;
	
	if (id == null)
		new Response(`Error`, {
			status: 400,
			headers: sharedResponse.headers,
		});

	//connect db
	connectDb();
	//delete rsvp from db
	await RSVP.findByIdAndDelete(id);
	return new Response(`SUCCESS!`, sharedResponse);
}

async function ParseRequestBody(req: { body: ReadableStream<Uint8Array> }) {
	if (!req.body) {
		throw new Error('Request body is null');
	}

	const reader = req.body.getReader();
	const chunks: Buffer[] = [];

	while (true) {
		const { done, value } = await reader.read();
		if (done) {
			break;
		}
		chunks.push(Buffer.from(value));
	}

	const bodyBuffer = Buffer.concat(chunks);
	return JSON.parse(bodyBuffer.toString());
}

export const config: Config = {
	path: "/.netlify/functions/rsvp2"
  };