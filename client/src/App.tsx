import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.tsx';
import RSVP from './pages/RSVP.tsx';
import FAQ from './pages/FAQ.tsx';
import Location from './pages/Location.tsx';
import Contact from './pages/Contact.tsx';
import Navbar from './components/Navbar.tsx';
import AdminPage from './pages/Admin.tsx';
import React from 'react';
import './css/App.css';

const App: React.FC = () => {
	return (
		<>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/rsvp" element={<RSVP />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/location" element={<Location />} />
					<Route path="/admin" element={<AdminPage />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
