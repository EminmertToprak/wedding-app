import '../css/contact.css';
import '../css/footer.css';
import React from 'react';
import ecemertportrait from '../images/ece_and_mert.jpg';
import ariciportrait from '../images/nabi_kadriye.png';
import toprakportrait from '../images/tekin_ayla.png';
import weddingplace from '../images/marenostrum.png';
import Footer from '../components/Footer.tsx';
import renderFlowers from '../components/Flowers.tsx';
const Contact: React.FC = (props) => {
	return (
		<>
			{renderFlowers('contact')}
			<div className="contacts">
				<div className="ece-mert-info">
					<img className="image" src={ecemertportrait} alt="Ece & Mert" />
					<h3>Ece & Mert</h3>
				</div>
				<div className="arici-info">
					<img className="image" src={ariciportrait} alt="Ece & Mert" />
					<h3>Arıcı Family</h3>
					<h4>Nabi Arıcı</h4>
					<sup>Father of Ece</sup>
					<br />
					<h4>Kadriye Arıcı</h4>
					<sup>Mother of Ece</sup>
					<br />
					<h4>Emre Arıcı</h4>
					<sup>Brother of Ece</sup>
					<br />
					<h4>Ayşe Arıcı</h4>
					<sup>Sister-in-law of Ece</sup>
				</div>
				<div className="toprak-info">
					<img className="image" src={toprakportrait} alt="Ece & Mert" />
					<h3>Toprak Family</h3>
					<h4>Tekin Toprak</h4>
					<sup>Father of Mert</sup>
					<br />
					<h4>Ayla Toprak</h4>
					<sup>Mother of Mert</sup>
					<br />
					<h4>Melis Toprak</h4>
					<sup>Sister of Mert</sup>
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
			<div id="contact-footer">
				<Footer name="Mert Toprak" link="https://mert-toprak.netlify.app/" />
			</div>
		</>
	);
};

export default Contact;
