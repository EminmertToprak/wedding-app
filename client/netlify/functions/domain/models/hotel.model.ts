import { Schema, model } from 'mongoose';

const hotelSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Name is required.'],
		},
		imageUrl: {
			type: String,
			required: [true, 'Image URL is required']
		},
		description: {
			type: String,
			required: false
		},
	},
	{
		timestamps: true,
	}
);

const Hotel = model('Hotel', hotelSchema);

module.exports = Hotel;
