import '../css/contact.css';
import '../css/footer.css';
import ecemertportrait from '../images/ece_and_mert.jpg';
import ariciportrait from '../images/nabi_kadriye.png';
import toprakportrait from '../images/tekin_ayla.png';
import weddingplace from '../images/marenostrum.png';
import Footer from '../components/footer';

import flowerTopLeft from '../images/flowers_top_left.png';
import flowerTopRight from '../images/flowers_top_right.png';
import flowerBottomLeft from '../images/flowers_bottom_left.png';
import flowerBottomRight from '../images/flowers_bottom_right.png';

function Contact(props) {
	return (
		<>
			<img
				className="top-left-flower-contact"
				src={flowerTopLeft}
				alt="flower_top_left"
			/>
			<img
				className="top-right-flower-contact"
				src={flowerTopRight}
				alt="flower_top_right"
			/>
			<img
				className="bottom-left-flower-contact"
				src={flowerBottomLeft}
				alt="flower_bottom_left"
			/>
			<img
				className="bottom-right-flower-contact"
				src={flowerBottomRight}
				alt="flower_bottom_right"
			/>
			<div className="contacts">
				<div className="ece-mert-info">
					<img className="image" src={ecemertportrait} alt="Ece & Mert" />
					<h3>Ece & Mert</h3>
					<div className="ece-mert">
						<div className="ece-info">
							<h4>Ece</h4>
							<p className="phone-title">📱🇳🇱 Phone:</p>
							<p>+31 (0)6 449 85 297</p>
							<p className="phone-title">📱🇹🇷 Phone & Whatsapp:</p>
							<p>+90 535 938 12 96</p>
							<p>
								<b>Email:</b> ececearici@gmail.com
							</p>
						</div>
						<br />
						<div className="mert-info">
							<h4>Mert</h4>
							<p className="phone-title">📱🇹🇷 Phone: </p>
							<p>+90 535 942 49 22</p>
							<p className="phone-title">📱🇳🇱 Phone & Whatsapp: </p>
							<p>+31 (0)6 333 75 504</p>
							<p>
								<b>Email:</b> mert.tprk@gmail.com
							</p>
						</div>
					</div>
				</div>
				<div className="arici-info">
					<img className="image" src={ariciportrait} alt="Ece & Mert" />
					<h3>Arıcı Family</h3>
					<h4>Nabi Arıcı</h4>
					<sup>Father of Ece</sup>
					<p>📱Phone: +90 532 741 55 50</p>
					<br />
					<h4>Kadriye Arıcı</h4>
					<sup>Mother of Ece</sup>
					<p>📱Phone: +90 536 540 38 43</p>
					<br />
					<h4>Emre Arıcı</h4>
					<sup>Brother of Ece</sup>
					<p>📱Phone: +90 532 785 28 38</p>
				</div>
				<div className="toprak-info">
					<img className="image" src={toprakportrait} alt="Ece & Mert" />
					<h3>Toprak Family</h3>
					<h4>Tekin Toprak</h4>
					<sup>Father of Mert</sup>
					<p>📱Phone: +90 532 366 63 40</p>
					<br />
					<h4>Ayla Toprak</h4>
					<sup>Mother of Mert</sup>
					<p>📱Phone: +90 532 733 75 36</p>
					<br />
					<h4>Melis Toprak</h4>
					<sup>Sister of Mert</sup>
					<p>📱Phone: +90 545 564 46 44</p>
				</div>
			</div>
			<br />
			<div className="wedding-place">
				<img
					src={weddingplace}
					alt="https://img.balnet.net/cdn/hotel/26572/Resim1637763663cvdtaosp-imgprms-default.jpg"
					className="image"
				/>
				<h3>Marenostrum Beach Club</h3>
				<p>Küçükköy, Sarımsaklı Blv, 10410 Ayvalık/Balıkesir, Türkiye</p>
				<p>Phone: +90 533 021 88 90</p>
			</div>
			<div id="footer">
				<Footer />
			</div>
		</>
	);
}

export default Contact;
