import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Map from '../components/map';
import '../css/location.css';

const Location = () => {
	const address = 'Marenostrum Beach Club Sarımsaklı';

	return (
		<>
			<Navbar />
			<div className="location">
				<h1>Wedding Location</h1>
				<Map address={address} />
				<Footer />
			</div>
		</>
	);
};
export default Location;
