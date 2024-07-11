import '../css/faq.css';
import '../css/footer.css';
import React from 'react';
import Footer from '../components/footer.tsx';
import flowerTopLeft from '../images/flowers_top_left.png';
import flowerTopRight from '../images/flowers_top_right.png';
import flowerBottomLeft from '../images/flowers_bottom_left.png';
import flowerBottomRight from '../images/flowers_bottom_right.png';

function FAQ(props): JSX.Element {
	return (
		<>
			<div className="faq">
				<img
					className="top-left-flower-faq"
					src={flowerTopLeft}
					alt="flower_top_left"
				/>
				<img
					className="top-right-flower-faq"
					src={flowerTopRight}
					alt="flower_top_right"
				/>
				<img
					className="bottom-left-flower-faq"
					src={flowerBottomLeft}
					alt="flower_bottom_left"
				/>
				<img
					className="bottom-right-flower-faq"
					src={flowerBottomRight}
					alt="flower_bottom_right"
				/>
				<div>
					<h1>Frequently Asked Questions</h1>
				</div>
				<div className="questions">
					<ul>
						<li>
							<h3>👗 What is the dress code of the event?</h3>
							<p>
								Typically, women wear cocktail gowns or night dresses, and men
								wear suits. Since it is a relaxed wedding near the beach, you
								can be less formal while still looking chic. Also, choose your
								shoes accordingly since the wedding is on the sand.
							</p>
						</li>
						<li>
							<h3>🎁 What is the typical Turkish wedding gift?</h3>
							<p>
								Having you with us is our most precious gift! &#128522; If you
								insist on give us a gift, traditionally in Turkish weddings,
								guests are giving money or Turkish gold coins while we go around
								the tables and welcome you. You can buy gold coins from a
								"kuyumcu" (jeweler) in the city if you want to real Turkish
								guest experience.
							</p>
						</li>
						<li>
							<h3>🏨 Are there any accommodation nearby?</h3>
							<p>
								The suggested accommodation options are listed in map section.
								Ayvalık & Sarımsaklı is very popular holiday places so you won't
								have any issues finding a place that suits you without any
								doubt.
							</p>
						</li>
						<li>
							<h3>🚕 Are there any transportation options nearby?</h3>
							<p>
								For those who need a taxi on the day of the wedding, the wedding
								officers can do that for you. Alternatively, if you are coming
								directly from the airport, you can also arrange that with Ece.
							</p>
						</li>
						<li>
							<h3>🚗 Parking</h3>
							<p>
								Wedding place has very large car parking option so you shouldn't
								worry about it at all! Also, in Turkey, most of the sideways are
								free parking, except the city centre of Ayvalık. If you would
								like to go to city centre of Ayvalık via car, there are multiple
								car parks you can use. But beware of the very very narrow
								streets!
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="faq-footer">
				<Footer />
			</div>
		</>
	);
}

export default FAQ;
