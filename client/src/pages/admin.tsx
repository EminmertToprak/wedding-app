import React, { useState, useEffect } from 'react';
import '../css/admin.css';

const AdminPage = () => {
	const [rsvps, setRsvps] = useState<
		{ id: string; name: string; email: string }[]
	>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 10; // Number of items per page

	const fetchRsvps = async () => {
		try {
			const response = await fetch(
				`/functions/rsvp/get?take=${pageSize}&skip=${
					(currentPage - 1) * pageSize
				}`
			);
			const data = await response.json();
			setRsvps(data);
		} catch (error) {
			console.error('Error fetching RSVP elements:', error);
		}
	};

	useEffect(() => {
		fetchRsvps();
	}, [currentPage, pageSize]);

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
						{rsvp.name} - {rsvp.email}
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
