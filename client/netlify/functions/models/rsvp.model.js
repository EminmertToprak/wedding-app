const { Schema, model } = require('mongoose');

const rsvpSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Full name is required.'],
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			lowercase: true,
			trim: true,
		},
		dietary: {
			type: String,
			default: 'Non-Vegetarian',
			enum: ['Non-Vegetarian', 'Vegetarian'],
			required: true,
		},
		attending: {
			type: Boolean,
			default: false,
		},
		plusOne: {
			type: Boolean,
			default: false,
		},
		guestName: {
			type: String,
			default: '',
		},
		plusOneDietary: {
			type: String,
			default: 'Non-Vegetarian',
			enum: ['Non-Vegetarian', 'Vegetarian', ''],
		},
	},
	{
		timestamps: true,
	}
);

const RSVP = model('RSVP', rsvpSchema);

module.exports = RSVP;
