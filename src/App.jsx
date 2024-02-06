import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/navbar';
import RSVP from './pages/RSVP';

import './css/App.css';

function App() {
	return (
		<>
			<div>
				<Routes>
					<Route path="/index" element={<Homepage />} />
				</Routes>
				<Routes>
					<Route path="/rsvp" element={<RSVP />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
