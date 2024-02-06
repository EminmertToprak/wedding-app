import '../css/navbar.css';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Navbar() {
	return (
		<div>
			<img src="../images/initials.png" alt="logo" />
			<Link to="/index">
				<button>Home</button>
			</Link>
			<Link to="/rsvp">
				<button>RSVP</button>
			</Link>
			<Link to="/faq">
				<button>FAQ</button>
			</Link>
			<Link to="/location">
				<button>Location</button>
			</Link>
		</div>
	);
}

export default Navbar;
