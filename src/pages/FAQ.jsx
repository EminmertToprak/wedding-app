import '../css/faq.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

function FAQ(props) {
	return (
		<>
			<Navbar />
			<div>
				<div>
					<h1>Frequently Asked Questions</h1>
				</div>
				<div>
					<ul>
						<li>
							<h3>Question 1</h3>
							<p>Answer</p>
						</li>
						<li>
							<h3>Question 2</h3>
							<p>Answer</p>
						</li>
						<li>
							<h3>Question 3</h3>
							<p>Answer</p>
						</li>
						<li>
							<h3>Question 4</h3>
							<p>Answer</p>
						</li>
					</ul>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default FAQ;
