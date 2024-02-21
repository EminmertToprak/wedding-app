import flowerTopLeft from '../images/flowers_top_left.png';
import flowerTopRight from '../images/flowers_top_right.png';
import flowerBottomLeft from '../images/flowers_bottom_left.png';
import flowerBottomRight from '../images/flowers_bottom_right.png';
import dateGif from '../images/2024_white.gif';
import '../css/Homepage.css';
import '../css/footer.css';
import Footer from '../components/footer';

function Homepage(props) {
	return (
		<>
			<div className="images">
				<img
					className="top-left-flower"
					src={flowerTopLeft}
					alt="flower_top_left"
				/>
				<img
					className="top-right-flower"
					src={flowerTopRight}
					alt="flower_top_right"
				/>
				<img
					className="bottom-left-flower"
					src={flowerBottomLeft}
					alt="flower_bottom_left"
				/>
				<img
					className="bottom-right-flower"
					src={flowerBottomRight}
					alt="flower_bottom_right"
				/>
				<a className="downarrowlinkblock w-inline-block" href="#OurStory">
					<img
						src="http://uploads.webflow.com/56c79e8b5e6fb84471a77069/5790ef97ed3b49f647da0198_Arrow.png"
						alt="ourstory"
					/>
				</a>
			</div>
			<div className="ourstory" id="OurStory">
				<div className="ourstoryinner w-container">
					<h1 className="headline1">Our Story</h1>
					<div className="body1">
						<em>
							<strong>He said,</strong>
						</em>{' '}
						“When I first met Ece, she just lit up the room. It was her
						birthday, five years back, and she was the center of it all. Even
						though we're into different stuff, there's something special about
						trying new things together—like getting hooked on those funny
						Turkish shows or just enjoying the outdoors. We've been through a
						lot, moving to a whole new country together, facing challenges, and
						soaking up all the cool stuff around us—food, people, you name it.
						Thinking about what's ahead, I can't help but feel super excited,
						knowing Ece will always be there with me."
					</div>
					<div className="body1">
						<em>
							<strong>She said,</strong>
						</em>{' '}
						"As soon as I met him, I was charmed by his warm smile. In addition
						to being my significant other, he became my family, and my best
						friend of all time. In the early days of my decision to begin a new
						life abroad, he was my biggest supporter, and despite the fact that
						we were over 2000 kilometers away from our family and homeland, he
						helped me to create a comfortable new place with his love and
						patience. We have been sharing a lot of things together despite the
						fact that we are different from each other. Now, as I look forward
						to our new adventures in life, you will be our beloved witnesses at
						the beginning of the new phase of our life as we begin
						our next chapter."
					</div>
					<img
						className="ourstorybreak"
						src="http://uploads.webflow.com/56c79e8b5e6fb84471a77069/57a62742f66b1be80d2ab1b7_OurStoryBreak.png"
						alt="Our Story Break"
					/>
					<div className="body1">
						We wanted to do our wedding in Ayvalık/Sarımsaklı because it's where
						Mert grew up, and for Ece, anywhere with sun, beach, and sea is a
						dream. That's why we wanted to share it with all of you. We hope
						you'll love this special place for us, with the beach where Ece &
						Mert has so many memories, the sun we've missed (especially coming
						from the Netherlands!), and the delicious food we both adore. We're
						both so excited to share this part of our story with you, surrounded
						by the beauty and warmth of Türkiye. We hope you'll join us in
						celebration!
					</div>
					<img
						className="ourstorybreak"
						src="http://uploads.webflow.com/56c79e8b5e6fb84471a77069/57a62742f66b1be80d2ab1b7_OurStoryBreak.png"
						alt="ourstorybreak"
					/>
					<h2 className="save-the-date">Save The Date!</h2>
					<div className="time-and-date">
						<div className="time-and-date-container">
							<div className="date">
								<img src={dateGif} alt="date" />
							</div>
						</div>
						<div className="time">
							<div className="wedding-ceramony">
								<h2>Wedding Ceramony: </h2>
								<h4>19:30</h4>
							</div>
							<div className="party">
								<h2>Party: </h2>
								<h4>20:30</h4>
							</div>
						</div>
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
}

export default Homepage;
