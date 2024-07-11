import Form from '../components/form.tsx';
import Footer from '../components/footer.tsx';
import '../css/rsvp.css';
import '../css/footer.css';
import React from 'react';
function RSVP(): JSX.Element {
	return (
		<>
			<div className="div-form">
				<Form />
				<Footer />
			</div>
		</>
	);
}

export default RSVP;
