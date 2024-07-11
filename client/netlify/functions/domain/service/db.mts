import { connect } from 'mongoose';

const connectDb = async () => {
  const mongodbUri = process.env.MONGODB_URI;
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

export default connectDb;
