import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/navbar';
import '../css/Homepage.css';

function Homepage(props) {
	return (
		<>
			<Navbar />
			<div>
				<div>
					<h1>Welcome to our wedding page!</h1>
				</div>
				<div>
					<h3>HOMEPAGE CONTENT</h3>
				</div>
			</div>
		</>
	);
}

export default Homepage;
