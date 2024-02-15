import Navbar from '../components/navbar';
import Form from '../components/form';
import Footer from '../components/footer';
import '../css/rsvp.css';

function RSVP() {
	return (
		<>
			<Navbar />
			<div className="div-form">
				<Form />
			</div>
			<Footer />
		</>
	);
}

export default RSVP;
