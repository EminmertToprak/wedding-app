import React from 'react';
import Map from '../components/map';
import '../css/location.css';

const Location = () => {
	const address = 'Marenostrum Beach Club Sarımsaklı';

	return (
		<>
			<div className="location">
				<h1>Wedding Location</h1>
				<Map address={address} />
			</div>
		</>
	);
};
export default Location;
