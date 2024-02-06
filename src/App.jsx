import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import RSVP from './pages/RSVP';
import FAQ from './pages/FAQ';
import Location from './pages/Location';

import './css/App.css';

function App() {
	return (
		<>
			<div>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/rsvp" element={<RSVP />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/location" element={<Location />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
