import React from 'react';
import Navbar from '../components/navbar';
import Map from '../components/map';
import '../css/location.css';

function Location(props) {
	const location = { lat: 39.267520904541016, lng: 26.680530548095703 };
	return (
		<>
			<Navbar />
			<div>
				<h1>
					This will have tips and directions for both wedding area and
					Ayvalık/Sarımsaklı Region
				</h1>

				<div id="map">
					<Map location={location} />
				</div>
			</div>
		</>
	);
}

export default Location;
