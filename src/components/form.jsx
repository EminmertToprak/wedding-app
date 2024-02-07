import { useState } from 'react';

function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [dietary, setDiatary] = useState('Non-Vegetarian');
	const [attending, setAttending] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log(
				`Your name is ${name}, your email is ${email}, Your dietary is ${dietary}, are you going to attend wedding? = ${attending}`
			);
		} catch (error) {
			console.error('zort');
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				Name:{' '}
				<input
					onChange={(e) => {
						setName(e.target.value);
					}}
					value={name}
					placeholder="Enter your full name please"
				/>
				<br />
				Email:
				<input
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					value={email}
					placeholder="Enter your email please"
				/>
				<br />
				Dietary:
				<select
					onChange={(e) => {
						setDiatary(e.target.value);
					}}
				>
					<option value="Vegetarian">Vegetarian</option>
					<option value="Non-vegetarian">Non-Vegetarian</option>
				</select>
				<br />
				Attending?:
				<input
					type="checkbox"
					onChange={(e) => {
						setAttending(e.target.checked);
					}}
					checked={attending}
				/>
				<button>Click to Submit</button>
			</form>
		</div>
	);
}

export default Form;
