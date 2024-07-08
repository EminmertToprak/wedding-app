import type { Config, Context } from '@netlify/functions';

export default async (req: Request, context: Context) => {
	const { id } = context.params;

	return new Response('Hello: ' + id);
};

export const config: Config = {
	path: '/hello/:id',
};
