import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import flowerTopLeft from '../images/flowers_top_left.png';
import flowerTopRight from '../images/flowers_top_right.png';
import flowerBottomLeft from '../images/flowers_bottom_left.png';
import flowerBottomRight from '../images/flowers_bottom_right.png';

import '../css/rsvp.css';
import '../css/footer.css';

import unchecked from '../images/empty_checkbox.png';
import checked from '../images/checked_checkbox.png';

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

	let navigate = useNavigate();

	const handleSubmit = async (e) => {
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

		// Deployment Based on Environment
		const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

		try {
			// Sending POST request to backend
			await axios.post(`${baseURL}/rsvp/submit`, requestBody);
			console.log('RSVP submitted succesfully!');
			alert('See you there!');
			navigate('/');
		} catch (error) {
			alert('Something went wrong! Please commmunicate with Mert.');
			console.error('Error submitting RSVP to DB:', error);
		}
	};

	const regretButton = async (e) => {
		e.preventDefault();
		try {
			navigate(`/`);
		} catch (error) {
			console.error('Can not navigate back to home: ' + error);
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
								<br />
								<h1>RSVP</h1>
								<br />
								<p>KINDLY RESPOND BY MAY 15ST</p>
								<br />
								<div className="names">
									<b>NAME/S</b>{' '}
									<p>
										{name} {guestName ? '& ' + guestName : ''}
									</p>
								</div>
								<div className="mail-letter">
									<b>MAIL</b>
									<p>{email}</p>
									<br />
								</div>
								<div className="attending-checkboxes">
									{attending ? (
										<>
											<div className="attending-checked">
												<b>Attending!</b>
												<img
													className="checkbox"
													src={checked}
													alt="filled checkbox"
												/>
											</div>
											<div className="not-attending-box">
												<b>Toasting from afar</b>
												<img
													className="checkbox"
													src={unchecked}
													alt="filled checkbox"
												/>
											</div>
										</>
									) : (
										<>
											<div className="attending-checked">
												<b>Attending!</b>
												<img
													className="checkbox"
													src={unchecked}
													alt="filled checkbox"
												/>
											</div>
											<div className="not-attending-box">
												<b>Toasting from afar</b>
												<img
													className="checkbox"
													src={checked}
													alt="filled checkbox"
												/>
											</div>
										</>
									)}
								</div>
								<div className="dietary-req">
									<br />
									<br />
									{attending ? (
										<div>
											<b>ANY DIETARY REQUIREMENTS?</b>
											<p>
												{attending && !plusOne
													? `Your choice is ${dietary}.`
													: ``}
												{attending && plusOne
													? `Your choice is ${dietary}, and your guests choice is ${plusOneDietary}.`
													: ``}
											</p>
										</div>
									) : (
										''
									)}
								</div>

								<div className="buttons">
									<button className="submit-button" onClick={handleSubmit}>
										Submit!
									</button>
									<button className="regret-button" onClick={closePopup}>
										Oops! Wrong Info.
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
						<h4>🖊️ Name & E-mail</h4>
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
						<h4>🍝 Diet Choice </h4>
						<select
							onChange={(e) => {
								setDiatary(e.target.value);
							}}
							value={dietary}
						>
							<option value="Vegetarian">🥗 Vegetarian</option>
							<option value="Non-Vegetarian">🥩 Non-Vegetarian</option>
						</select>
						<br />
						<h4>🤞 Are you attending?</h4>
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
								<h4>👥 Do you have a plus one guest?</h4>
								<input
									type="checkbox"
									onChange={handlePlusOneChange}
									checked={plusOne}
								/>
								{plusOne && (
									<>
										<br />
										<h4>🖊️ Guest Name</h4>{' '}
										<input
											onChange={(e) => {
												setGuestName(e.target.value);
											}}
											value={guestName}
											placeholder="Enter guest name please"
										/>
										<br />
										<h4>🍝 Guest Diet Choice</h4>{' '}
										<select
											onChange={(e) => {
												setPlusOneDietary(e.target.value);
											}}
											value={plusOneDietary}
										>
											<option value="Vegetarian">🥗 Vegetarian</option>
											<option value="Non-Vegetarian">🥩 Non-Vegetarian</option>
										</select>
									</>
								)}
							</>
						)}

						<div className="buttons">
							<button className="check-button" onClick={confirmation}>
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
