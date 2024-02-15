import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ address }) => {
	const containerStyle = {
		width: '400px',
		height: '400px',
	};

	const center = {
		lat: 39.26777436716273,
		lng: 26.680659279339128,
	};

	return (
		<LoadScript
			googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
		>
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
				<Marker position={center} />
			</GoogleMap>
		</LoadScript>
	);
};

export default Map;
