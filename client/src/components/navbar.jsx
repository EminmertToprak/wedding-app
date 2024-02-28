import '../css/navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className="navbar">
			<div className="menu-items">
				<Link className="menu-button" to="/" onClick={toggleMenu}>
					Home
				</Link>
				<Link className="menu-button" to="/rsvp" onClick={toggleMenu}>
					RSVP
				</Link>
				<Link className="menu-button" to="/location" onClick={toggleMenu}>
					Location
				</Link>
				<Link className="menu-button" to="/contact" onClick={toggleMenu}>
					Contact
				</Link>
				<Link className="menu-button" to="/faq" onClick={toggleMenu}>
					FAQ
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
