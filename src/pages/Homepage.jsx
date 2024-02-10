import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import flowerTopLeft from '../images/flowers_top_left.png';
import flowerTopRight from '../images/flowers_top_right.png';
import flowerBottomLeft from '../images/flowers_bottom_left.png';
import flowerBottomRight from '../images/flowers_bottom_right.png';

import Navbar from '../components/navbar';
import '../css/Homepage.css';

function Homepage(props) {
	return (
		<>
			<header className="images">
				<Navbar />
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
			</header>
			<div class="ourstory" id="OurStory">
				<div class="ourstoryinner w-container">
					<h1 class="headline1">Our Story</h1>
					<div class="body1">
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
					<div class="body1">
						<em>
							<strong>She said,</strong>
						</em>{' '}
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
						corporis. Sed aperiam nemo ipsa distinctio modi neque. Sunt,
						blanditiis enim dignissimos deleniti possimus dolores, voluptatem
						velit, quasi fugit unde suscipit iusto! Provident atque vel saepe
						harum vitae ratione explicabo itaque maiores quibusdam deleniti
						voluptas necessitatibus eum qui, officiis assumenda enim ut aliquid
						dolore nulla dolor minus laboriosam odit ipsum? Rerum dolore
						repellendus deserunt minus aperiam ratione aut, consectetur optio
						quaerat perspiciatis maiores distinctio, voluptatem autem reiciendis
						minima non illum, ipsam molestias delectus tenetur quibusdam nihil?
						Alias porro iusto quod sequi vero. Possimus laborum sapiente itaque
						sunt inventore ab iure quas!"
					</div>
					<img
						class="ourstorybreak"
						src="http://uploads.webflow.com/56c79e8b5e6fb84471a77069/57a62742f66b1be80d2ab1b7_OurStoryBreak.png"
					/>
					<div class="body1">
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
						class="ourstorybreak"
						src="http://uploads.webflow.com/56c79e8b5e6fb84471a77069/57a62742f66b1be80d2ab1b7_OurStoryBreak.png"
					/>
					<div className="location">
						<h2>Date & Time</h2>
						<h3>Lorem ipsum dolor sit amet.</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
							quam magnam similique deserunt, pariatur ducimus amet harum neque
							corrupti possimus cupiditate dolorum modi minus nisi!
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Homepage;
