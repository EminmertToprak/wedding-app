import React from 'react';
import '../css/location.css';
import '../css/footer.css';
import Footer from '../components/footer';
import flowerTopLeft from '../images/flowers_top_left.png';
import flowerTopRight from '../images/flowers_top_right.png';
import flowerBottomLeft from '../images/flowers_bottom_left.png';
import flowerBottomRight from '../images/flowers_bottom_right.png';
import musho from '../images/musho.jpg';
import searesort from '../images/searesort.jpg';
import dresort from '../images/dresort.jpg';
import temizel from '../images/temizel.jpg';
import ayvalik from '../images/ayvalik.png';
import sarimsakli from '../images/sarimsakli.jpg';
import cunda from '../images/cunda.jpg';
import ida from '../images/ida.jpg';
import zeytinyag from '../images/zeytinyag.png';
import weddingPlace from '../images/wedding-place.jpg';

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
				<h2>Wedding Location</h2>
				<br />
				<div className="map-and-location">
					<div className="wedding-location">
						<a
							href="https://www.google.com/maps/place/Marenostrum+Beach+Club+Sar%C4%B1msakl%C4%B1/@39.2676915,26.6802943,17z/data=!4m6!3m5!1s0x14ba71aebd30067b:0xa412082d99a6625f!8m2!3d39.2676874!4d26.6806805!16s%2Fg%2F11nx208gkb?entry=ttu"
							target="_blank"
							rel="noreferrer"
						>
							<img
								className="map-image"
								src={weddingPlace}
								alt="Marenostrum Beach Club Sarımsaklı"
							/>
						</a>
						<sup>Click image for Google Maps Location</sup>
						<h3>Marenostrum Beach Club</h3>
						<p>Küçükköy, Sarımsaklı Blv, 10410 Ayvalık/Balıkesir, Türkiye</p>
						<p>Phone: +90 533 021 88 90</p>
					</div>
				</div>
				<br />
				<div className="accommodation">
					<h2>Where to stay?</h2>
					<br />
					<p>Hotels that are suggested by our organiser:</p>
					<br />
					<div className="hotels">
						<div className="hotel">
							<h2>Musho Hotel</h2>
							<a
								href="https://grand-musho-hotel.rezervasyonal.com/"
								target="_blank"
								rel="noreferrer"
							>
								<img className="hotel-image" src={musho} alt="musho" />
							</a>
						</div>
						<div className="hotel">
							<h2>Ayvalik Sea Resort</h2>
							<a
								href="https://www.besthotel.pt/tr/ayvalik-sea-resort/"
								target="_blank"
								rel="noreferrer"
							>
								<img className="hotel-image" src={searesort} alt="searesort" />
							</a>
						</div>
						<div className="hotel">
							<h2>D Resort Ayvalik</h2>
							<a
								href="https://www.dresortayvalik.com/en"
								target="_blank"
								rel="noreferrer"
							>
								<img className="hotel-image" src={dresort} alt="dresort" />
							</a>
						</div>
						<div className="hotel">
							<h2>Temizel Hotel</h2>
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
				<h2>What to do before / after Wedding?</h2>
				<br />
				<div className="suggestions">
					<div className="suggestion-1">
						<article className="article">
							<h3>Ayvalık City Center</h3>
							<p>
								Visit the charming coastal town of Ayvalık, located about 40km
								from Sarımsaklı. Explore its narrow streets lined with old Greek
								houses, enjoy fresh seafood with rakı at waterfront restaurants,
								and take a boat tour to the nearby islands.
							</p>
						</article>
						<img src={ayvalik} alt="" />
					</div>
					<hr />
					<div className="suggestion-2">
						<img src={sarimsakli} alt="" />
						<article className="article">
							<h3>Sarımsaklı Beach</h3>
							<p>
								Spend some time relaxing on the beautiful Sarımsaklı Beach,
								known for its golden sands and clear waters. You can sunbathe,
								swim, or engage in water sports like windsurfing and sailing.
								This is also where our wedding is going to take place!
							</p>
						</article>
					</div>
					<hr />
					<div className="suggestion-3">
						<article className="article">
							<h3>Cunda Island (Alibey Island)</h3>
							<p>
								Connected to Ayvalık by a causeway, Cunda Island offers
								picturesque streets, historical sites, and stunning sea views.
								Don't miss the chance to visit the Taksiyarhis Church and
								explore the island's quaint villages.
							</p>
						</article>
						<img src={cunda} alt="" />
					</div>
					<hr />
					<div className="suggestion-4">
						<img src={ida} alt="" />
						<article className="article">
							<h3>Mount Ida National Park</h3>
							<p>
								Experience nature at Mount Ida National Park, located
								approximately 60km from Sarımsaklı. Hike through lush forests,
								picnic by waterfalls, and enjoy panoramic views of the
								surrounding landscape.
							</p>
						</article>
					</div>
					<hr />
					<div className="suggestion-5">
						<article className="article">
							<h3>Olive Oil Tasting</h3>
							<p>
								Balıkesir province is famous for its olive oil production. Take
								a tour of a local olive oil factory or visit an olive grove to
								learn about the olive oil-making process and sample some of the
								region's finest products.
							</p>
						</article>
						<img src={zeytinyag} alt="" />
					</div>
				</div>
			</div>
			<div id="location-footer">
				<Footer />
			</div>
		</>
	);
};
export default Location;
