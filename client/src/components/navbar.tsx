import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'; // Import CSS directly

const menuItems = [
	{ path: '/', label: 'Home' },
	{ path: '/rsvp', label: 'RSVP' },
	{ path: '/location', label: 'Location' },
	{ path: '/contact', label: 'Contact' },
	{ path: '/faq', label: 'FAQ' },
];

const Navbar: React.FC = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className="navbar">
			<div className="menu-items">
				{menuItems.map((item, index) => (
					<Link
						key={index}
						className="menu-button"
						to={item.path}
						onClick={toggleMenu}
					>
						{item.label}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Navbar;
