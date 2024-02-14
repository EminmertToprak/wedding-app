import React, { useEffect, useRef } from 'react';

function Map({ location }) {
	const mapRef = useRef(null);

	useEffect(() => {
		// Load the Google Maps JavaScript API script
		const script = document.createElement('script');
		script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAWCJG0hZ67M3T1OO1GMH41WPbz55WRDKY&libraries=places`;
		script.defer = true;
		script.async = true;
		document.body.appendChild(script);

		script.onload = () => {
			// Initialize the map
			const map = new window.google.maps.Map(mapRef.current, {
				center: location,
				zoom: 15,
			});

			// Add a marker for the specified location
			new window.google.maps.Marker({
				position: location,
				map: map,
			});
		};

		return () => {
			// Clean up: remove the Google Maps script when component unmounts
			document.body.removeChild(script);
		};
	}, [location]);

	return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
}

export default Map;
