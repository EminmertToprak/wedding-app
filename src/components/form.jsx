function Form() {
	function GoToHomePage() {
		window.location = '/';
	}
	return (
		<div>
			<form>
				Name: <input type="text" name="name" placeholder="Your Full Name" />
				<button type="button" name="button" onClick={GoToHomePage}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Form;
