import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/navbar';

import './css/App.css';

function App() {
	return (
		<>
			<div>
				<Routes>
					<Route path="/" element={<Homepage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
