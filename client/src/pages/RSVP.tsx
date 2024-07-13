import Form from '../components/Form.tsx';
import Footer from '../components/Footer.tsx';
import '../css/rsvp.css';
import '../css/footer.css';
import React from 'react';
function RSVP(): JSX.Element {
	return (
		<>
			<div className="div-form">
				<Form />
				<Footer name="Mert Toprak" link="https://mert-toprak.netlify.app/" />
			</div>
		</>
	);
}

export default RSVP;
