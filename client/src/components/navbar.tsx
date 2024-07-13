import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

const menuItems = [
	{ path: '/', label: 'Home' },
	{ path: '/rsvp', label: 'RSVP' },
	{ path: '/location', label: 'Location' },
	{ path: '/contact', label: 'Contact' },
	{ path: '/faq', label: 'FAQ' },
];

const Navbar: React.FC = () => {
	return (
		<div className="navbar">
			<div className="menu-items">
				{menuItems.map((item, index) => (
					<Link key={index} className="menu-button" to={item.path}>
						{item.label}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Navbar;
