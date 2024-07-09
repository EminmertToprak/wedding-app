import { Context } from '@netlify/functions';

const sharedResponse = {
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, DELETE',
		'Access-Control-Allow-Headers': 'Content-Type',
	},
};

export default async (req: Request, context: Context) => {
	return new Response('Hello', {
		status: 200,
		headers: sharedResponse.headers,
	});
};

export const config = {
	path: ['/functions/hello'],
};
