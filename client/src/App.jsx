import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import RSVP from './pages/RSVP';
import FAQ from './pages/FAQ';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Navbar from './components/navbar';
import Admin from './pages/admin.tsx';

import './css/App.css';

function App() {
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
					<Route path="/admin" element={<Admin />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
