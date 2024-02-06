import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/navbar';
import '../css/location.css';

function Location(props) {
	return (
		<>
			<Navbar />
			<div>
				<div>
					<h1>
						This will have tips and directions for both wedding area and
						Ayvalık/Sarımsaklı Region
					</h1>
				</div>
				<div id="map">
					<h3>This is where map will come</h3>
				</div>
			</div>
		</>
	);
}

export default Location;
