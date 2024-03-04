import { connect } from 'mongoose';

const connectDB = async () => {
	try {
		await connect(Netlify.env.get('MONGODB_URI'), {});
		console.log('MongoDB connected');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
		process.exit(1);
	}
};

export default connectDB;
