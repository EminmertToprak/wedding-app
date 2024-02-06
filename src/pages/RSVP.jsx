import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/navbar';
import Form from '../components/form';
import '../css/rsvp.css';

function RSVP() {
	return (
		<>
			<Navbar />
			<Form />
		</>
	);
}

export default RSVP;
