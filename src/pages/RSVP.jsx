import Navbar from '../components/navbar';
import Form from '../components/form';
import '../css/rsvp.css';

function RSVP() {
	return (
		<>
			<Navbar />
			<div className="div-form">
				<Form />
			</div>
		</>
	);
}

export default RSVP;
