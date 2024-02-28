const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
	res.send('Hello from Express.js running on Netlify!');
});

module.exports.handler = async (event, context) => {
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
