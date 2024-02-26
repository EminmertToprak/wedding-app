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
			enum: ['Non-Vegetarian', 'Vegetarian', 'Non-vegetarian', 'Vegetarian'],
			validate: {
				validator: function (value) {
					return [
						'Non-Vegetarian',
						'Vegetarian',
						'Non-vegetarian',
						'Vegetarian',
					].includes(value);
				},
				message: (props) =>
					`${props.value} is not a valid dietary option. Please choose from 'Non-Vegetarian' or 'Vegetarian'.`,
			},
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
			enum: ['Non-Vegetarian', 'Vegetarian'],
		},
	},
	{
		timestamps: true,
	}
);

const RSVP = model('RSVP', rsvpSchema);

module.exports = RSVP;
