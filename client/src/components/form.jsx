import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

import flowerTopLeft from '../images/flowers_top_left.png';
import flowerTopRight from '../images/flowers_top_right.png';
import flowerBottomLeft from '../images/flowers_bottom_left.png';
import flowerBottomRight from '../images/flowers_bottom_right.png';

import '../css/rsvp.css';
import '../css/footer.css';

// const apiUrl = 'localhost:3000/rsvp';

function Form() {
	const [name, setName] = useState('');
	const [guestName, setGuestName] = useState('');
	const [email, setEmail] = useState('');
	const [dietary, setDiatary] = useState('Vegetarian');
	const [attending, setAttending] = useState(false);
	const [plusOne, setPlusOne] = useState(false);
	const [plusOneDietary, setPlusOneDietary] = useState('');

	function confirmation(e) {
		e.preventDefault();
		let popup = document.getElementById('myPopup');
		popup.classList.toggle('show');
	}

	const handleSubmit = async (e) => {
		// console.log(
		// 	`Name: ${name}, email: ${email}, dietary: ${dietary}, attending?: ${attending}, Plus 1?: ${plusOne}, Plus 1 Name: ${guestName}, plus 1 dietary?: ${plusOneDietary}`
		// );
		e.preventDefault();

		const requestBody = {
			name,
			email,
			dietary,
			attending,
			plusOne,
			guestName,
			plusOneDietary,
		};
		console.log(requestBody);

		// 	axios
		// 		.post(`${apiUrl}/rsvp`, requestBody)
		// 		.then((response) => {
		// 			navigate('/rsvp');
		// 		})
		// 		.catch((error) => {
		// 			alert('zort');
		// 			console.error('Error in axios: ', error);
		// 		});
		// } catch (error) {
		// 	console.error('zort');
		// }
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

	const closePopup = async (e) => {
		e.preventDefault();
		let popup = document.getElementById('myPopup');
		popup.classList.remove('show');
	};

	const handlePlusOneChange = (e) => {
		setPlusOne(e.target.checked);
		if (!e.target.checked) {
			setGuestName('');
			setPlusOneDietary('');
		} else {
			setPlusOneDietary('Vegetarian');
		}
	};

	return (
		<>
			<div className="form-div">
				<img
					className="top-left-flower-form"
					src={flowerTopLeft}
					alt="flower_top_left"
				/>
				<img
					className="top-right-flower-form"
					src={flowerTopRight}
					alt="flower_top_right"
				/>
				<img
					className="bottom-left-flower-form"
					src={flowerBottomLeft}
					alt="flower_bottom_left"
				/>
				<img
					className="bottom-right-flower-form"
					src={flowerBottomRight}
					alt="flower_bottom_right"
				/>
				<div className="popup">
					<span className="popuptext" id="myPopup">
						<div className="confirm-info">
							<form>
								<p>Name: {name}</p>
								<p>E-mail: {email}</p>
								<p>Dietary: {dietary}</p>
								<p>Are you attending?: {attending ? 'Yes!' : 'No :('}</p>
								<p>Do you have a guest?: {plusOne ? 'Yes!' : 'No'}</p>
								<p>{plusOne ? `Guest Name?: ${guestName}` : ''}</p>
								<p>
									{plusOneDietary ? `Guest's Dietary?: ${plusOneDietary}` : ''}
								</p>
								<div className="buttons">
									<button className="submit-button" onClick={handleSubmit}>
										Submit
									</button>
									<button className="regret-button" onClick={closePopup}>
										Oops! Wrong Info
									</button>
								</div>
							</form>
						</div>
					</span>
				</div>
				<div className="form-main">
					<div className="info">
						<h1>RSVP</h1>
						<h2>for the wedding of</h2>
						<h1>Ece & Mert</h1>
						<hr />
					</div>
					<form method="POST" className="form-info" onSubmit={confirmation}>
						<input
							onChange={(e) => {
								setName(e.target.value);
							}}
							value={name}
							placeholder="Enter your full name please"
						/>
						<input
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							value={email}
							placeholder="Enter your email please"
						/>
						<br />
						<h4>Dietary:</h4>
						<select
							onChange={(e) => {
								setDiatary(e.target.value);
							}}
							value={dietary}
						>
							<option value="Vegetarian">Vegetarian</option>
							<option value="Non-vegetarian">Non-Vegetarian</option>
						</select>
						<br />
						<h4>Attending?:</h4>
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

						<div className="buttons">
							<button className="submit-button" onClick={confirmation}>
								Check
							</button>
							<button className="regret-button" onClick={regretButton}>
								Regret
							</button>
						</div>
						<aside>
							*Please keep in touch with your guest so there won't be double
							entry
						</aside>
						<aside>
							**If you have any alergens please reach Ece via her email!
						</aside>
					</form>
				</div>
			</div>
		</>
	);
}

export default Form;
