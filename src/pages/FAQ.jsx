import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/faq.css';

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
		</>
	);
}

export default FAQ;