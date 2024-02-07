import { useState } from 'react';

function Form() {
	const [name, setName] = useState('');
	const [guestName, setGuestName] = useState('');
	const [email, setEmail] = useState('');
	const [dietary, setDiatary] = useState('Non-Vegetarian');
	const [attending, setAttending] = useState(false);
	const [plusOne, setPlusOne] = useState(false);
	const [plusOneDietary, setPlusOneDietary] = useState('Non Vegetarian');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log(
				`Your name is ${name}, your email is ${email}, Your dietary is ${dietary}, are you going to attend wedding? = ${attending}, Do you have a plus one? ${plusOne}, if true, your plus one name is ${guestName} and their dietary is ${plusOneDietary}`
			);
		} catch (error) {
			console.error('zort');
		}
	};

	const handlePlusOneChange = (e) => {
		setPlusOne(e.target.checked);
		if (!e.target.checked) {
			setGuestName('');
			setPlusOneDietary('Non-Vegetarian');
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
				<br />
				{attending && (
					<>
						Plus 1?:
						<input
							type="checkbox"
							onChange={handlePlusOneChange}
							checked={plusOne}
						/>
						{plusOne && (
							<>
								<br />
								Guest Name:{' '}
								<input
									onChange={(e) => {
										setGuestName(e.target.value);
									}}
									value={guestName}
									placeholder="Enter guest name please"
								/>
								<br />
								Guest Dietary:{' '}
								<select
									onChange={(e) => {
										setPlusOneDietary(e.target.value);
									}}
									value={plusOneDietary}
								>
									<option value="Vegetarian">Vegetarian</option>
									<option value="Non-vegetarian">Non-Vegetarian</option>
								</select>
							</>
						)}
					</>
				)}
				<br />
				<button>Click to Submit</button>
			</form>
		</div>
	);
}

export default Form;
