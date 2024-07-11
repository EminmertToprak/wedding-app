import { Config, Context } from '@netlify/functions';

const connectDb = require('./domain/service/db.mts').default;
const RSVP = require('./domain/models/rsvp.model');

export default async (req: Request, context: Context) => {
	if (req.method === 'OPTIONS') return HandleOptions(req, context);
	if (req.method === 'POST') return HandlePost(req, context);
	if (req.method === 'GET') return HandleGet(req, context);
	if (req.method === 'DELETE') return HandleDelete(req, context);

	return new Response('BAD REQUEST', {
		status: 400
	});
};

//[OPTIONS] /rsvp
async function HandleOptions(req: Request, context: Context) {
	return new Response(null);
}

//[POST] /rsvp
async function HandlePost(req: Request, context: Context) {
	try {
		let body = await ParseRequestBody(req as { body: ReadableStream<Uint8Array> });
		const newRSVP = new RSVP(body);
		await connectDb();
		await newRSVP.save();
		return new Response(`SUCCESS!`);
	} catch (error) {
		console.error('Error submitting RSVP:', error);
		return new Response(`Error: ${error}`, {
			status: 400
		});
	}
}

async function HandleGet(req: Request, context: Context) {
    try {
    await connectDb();
		const url = new URL(req.url);
  
		const skip = url.searchParams.get('skip');
		const take = url.searchParams.get('take');
		
		const skipNumber = skip ? parseInt(skip) : 0;
		let takeNumber = take ? parseInt(take) : 10;
		if(takeNumber > 10 ) takeNumber = 10;

		const rsvps = await RSVP.find().skip(skipNumber).limit(takeNumber);
        
        return new Response(JSON.stringify(rsvps));
    } catch (error) {
        console.error('Error getting RSVP:', error);
        return new Response(`Error: ${error}`, {
            status: 400
        });
    }
}

async function HandleDelete(req: Request, context: Context) {
  const id = req.url.split('/').pop();
  console.log(id);
	
	if (!id || id === undefined || id === "rsvp")
		new Response(`Error`, {
			status: 400
		});

	await connectDb();
	await RSVP.findByIdAndDelete(id);
	return new Response(`SUCCESS!`);
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