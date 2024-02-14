import React, { useEffect, useRef } from 'react';
import '../css/map.css';

function Map({ location }) {
	const mapRef = useRef(null);

	useEffect(() => {
		let map;

		// Load Google Maps API script if it's not already loaded
		if (!window.google) {
			const script = document.createElement('script');
			script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAWCJG0hZ67M3T1OO1GMH41WPbz55WRDKY&libraries=places`;
			script.defer = true;
			script.async = true;
			script.onload = initMap;
			document.body.appendChild(script);
		} else {
			initMap();
		}

		function initMap() {
			map = new window.google.maps.Map(mapRef.current, {
				center: location,
				zoom: 15,
			});

			new window.google.maps.Marker({
				position: location,
				map: map,
			});
		}

		return () => {
			// Clean up: remove the map container when component unmounts
			if (mapRef.current && mapRef.current.parentNode) {
				mapRef.current.parentNode.removeChild(mapRef.current);
			}
		};
	}, [location]);

	return (
		<div
			className="map"
			ref={mapRef}
			style={{ width: '30%', height: '500px' }}
		/>
	);
}

export default Map;
