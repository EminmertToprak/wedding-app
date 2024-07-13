import React from 'react';
import { useState, useEffect } from 'react';
import { GetRsvps } from '../services/rsvpService.tsx';
import RsvpModel from '../services/models/rsvpModel';

const AdminTable: React.FC = () => {
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
		<div>
			<ul>
				{rsvps.map((rsvp, i) => (
					<li key={i + 1}>
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

export default AdminTable;
