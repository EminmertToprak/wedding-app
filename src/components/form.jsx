import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
	const [name, setName] = useState('');
	const [guestName, setGuestName] = useState('');
	const [email, setEmail] = useState('');
	const [dietary, setDiatary] = useState('Vegetarian');
	const [attending, setAttending] = useState(false);
	const [plusOne, setPlusOne] = useState(false);
	const [plusOneDietary, setPlusOneDietary] = useState('Vegetarian');

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

	let navigate = useNavigate();

	const regretButton = async (e) => {
		e.preventDefault();
		try {
			navigate(`/`);
		} catch (error) {
			console.error('zort regret');
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
		<div className="form">
			<div className="info">
				<h1>RSVP</h1>
				<h2>for the wedding of</h2>
				<h1>Ece & Mert</h1>
				<hr />
			</div>
			<form className="form" onSubmit={handleSubmit}>
				<input
					onChange={(e) => {
						setName(e.target.value);
					}}
					value={name}
					placeholder="Enter your full name please"
				/>
				<br />
				<input
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					value={email}
					placeholder="Enter your email please"
				/>
				<br />
				Dietary:
				<br />
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
				<div className="buttons">
					<button className="submit-button">Submit</button>
					<button className="regret-button" onClick={regretButton}>
						Regret
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
