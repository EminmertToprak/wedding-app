import React, { useState, useEffect } from 'react';
import '../css/admin.css';
import { GetRsvps } from '../services/rsvpService.tsx';
import RsvpModel from '../services/models/rsvpModel';

const AdminPage = () => {
	const [rsvps, setRsvps] = useState<RsvpModel[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 10;

	useEffect(() => {
		GetRsvps(pageSize, (currentPage - 1) * pageSize)
			.then((res) => {
				setRsvps(res);
			})
			.catch((err) => console.log(err));
	}, [currentPage]);

	const handlePrevClick = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	const handleNextClick = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	return (
		<div className="admin-page">
			<h1 className="text-center mt-10 mb-5 p-5">Admin Page - RSVP Elements</h1>
			<ul>
				{rsvps.map((rsvp) => (
					<li key={rsvp.id}>
						{rsvp.name} - {rsvp.email} -{' '}
						{rsvp.attending ? 'Attending' : 'Not Attending'}
					</li>
				))}
			</ul>
			<div className="button-container">
				<button onClick={handlePrevClick} disabled={currentPage === 1}>
					Previous
				</button>
				<button onClick={handleNextClick}>Next</button>
			</div>
		</div>
	);
};

export default AdminPage;
