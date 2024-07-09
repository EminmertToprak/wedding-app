import type { Context } from "@netlify/functions";
import connectDB from './db.mts';

export default async (req: Request, context: Context) => {
  try {
    await connectDB(req, context);
    return new Response("Database connection successful!");
  } catch (error) {
    return new Response(`Error connecting to the database: ${error.message}`, { status: 500 });
  }
}