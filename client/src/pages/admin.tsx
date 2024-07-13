import React from 'react';
import '../css/admin.css';
import AdminTable from '../components/AdminTable.tsx';

const AdminPage: React.FC = () => {
	return (
		<div className="admin-page">
			<h1 className="text-center">Admin Page - RSVP Elements</h1>
			<AdminTable />;
		</div>
	);
};

export default AdminPage;
