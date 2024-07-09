import { connect } from 'mongoose';
import type { Context } from '@netlify/functions';

const connectDB = async (req: Request, context: Context) => {
    const mongodbUri = Netlify.env.get('MONGODB_URI');
    if (!mongodbUri) {
        throw new Error('MongoDB URI is undefined');
    }

    try {
        await connect(mongodbUri, {});
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;