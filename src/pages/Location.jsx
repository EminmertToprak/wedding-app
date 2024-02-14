import React from 'react';
import Navbar from '../components/navbar';
import Map from '../components/map';
import '../css/location.css';

function Location(props) {
	const location = { lat: 40.7128, lng: -74.006 };
	return (
		<>
			<Navbar />
			<div>
				<h1>
					This will have tips and directions for both wedding area and
					Ayvalık/Sarımsaklı Region
				</h1>
			</div>
			<div id="map">
				<Map location={location} />
			</div>
		</>
	);
}

export default Location;
