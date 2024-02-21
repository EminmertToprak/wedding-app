import React from 'react';
import '../css/location.css';
import '../css/footer.css';
import Footer from '../components/footer';
import mapimage from '../images/map.png';
import flowerTopLeft from '../images/flowers_top_left.png';
import flowerTopRight from '../images/flowers_top_right.png';
import flowerBottomLeft from '../images/flowers_bottom_left.png';
import flowerBottomRight from '../images/flowers_bottom_right.png';
import musho from '../images/musho.jpg';
import searesort from '../images/searesort.jpg';
import dresort from '../images/dresort.jpg';
import temizel from '../images/temizel.jpg';

const Location = () => {
	return (
		<>
			<img
				className="top-left-flower-location"
				src={flowerTopLeft}
				alt="flower_top_left"
			/>
			<img
				className="top-right-flower-location"
				src={flowerTopRight}
				alt="flower_top_right"
			/>
			<img
				className="bottom-left-flower-location"
				src={flowerBottomLeft}
				alt="flower_bottom_left"
			/>
			<img
				className="bottom-right-flower-location"
				src={flowerBottomRight}
				alt="flower_bottom_right"
			/>
			<div className="location">
				<div className="map">
					<br />
					<h2>Wedding Location</h2>
					<br />
					<sup>Click image for Google Maps Location</sup>
					<br />
					<a
						href="https://www.google.com/maps/place/Marenostrum+Beach+Club+Sar%C4%B1msakl%C4%B1/@39.2676915,26.6802943,17z/data=!4m6!3m5!1s0x14ba71aebd30067b:0xa412082d99a6625f!8m2!3d39.2676874!4d26.6806805!16s%2Fg%2F11nx208gkb?entry=ttu"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="map-image"
							src={mapimage}
							alt="Marenostrum Beach Club Sarımsaklı"
						/>
					</a>
					<h3>Marenostrum Beach Club</h3>
					<p>Küçükköy, Sarımsaklı Blv, 10410 Ayvalık/Balıkesir, Türkiye</p>
					<p>Phone: +90 533 021 88 90</p>
				</div>
				<br />
				<div className="accommodation">
					<h2>Where to stay?</h2>
					<br />
					<p>Hotels that are suggested by our organiser:</p>
					<br />
					<div className="hotels">
						<div className="hotel">
							<p>Musho Hotel</p>
							<a
								href="https://grand-musho-hotel.rezervasyonal.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img className="hotel-image" src={musho} alt="musho" />
							</a>
						</div>
						<div className="hotel">
							<p>Ayvalık Sea Resort</p>
							<a
								href="https://www.besthotel.pt/tr/ayvalik-sea-resort/"
								target="_blank"
								rel="noreferrer"
							>
								<img className="hotel-image" src={searesort} alt="searesort" />
							</a>
						</div>
						<div className="hotel">
							<p>D Resort Ayvalık</p>
							<a
								href="https://www.dresortayvalik.com/en"
								target="_blank"
								rel="noreferrer"
							>
								<img className="hotel-image" src={dresort} alt="dresort" />
							</a>
						</div>
						<div className="hotel">
							<p>Temizel Hotel</p>
							<a
								href="https://www.otelz.com/en/hotel/grand-hotel-temizel/2701?search=eyJwIjoiMjcwMSIsInQiOiIwIiwiZyI6IjYiLCJzIjoiMjQtMDItMjgiLCJlIjoiMjQtMDItMjkiLCJsIjoiMjcwMSIsImQiOiIwIiwicSI6IjEiLCJ6IjoiMCIsInIiOlt7ImEiOjIsImciOltdfV0sImMiOiJUUlkifQ==&utm_source=metasearch&utm_medium=google&utm_campaign=search&to=1847"
								target="_blank"
								rel="noreferrer"
							>
								<img className="hotel-image" src={temizel} alt="temizel" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div id="footer">
				<Footer />
			</div>
		</>
	);
};
export default Location;
