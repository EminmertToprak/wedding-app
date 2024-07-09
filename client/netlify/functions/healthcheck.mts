import { Context } from '@netlify/functions';

export default async (req: Request, context: Context) => new Response('Healthy');