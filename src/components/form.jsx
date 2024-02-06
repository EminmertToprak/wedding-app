function Form() {
	// function testAlert(form) {
	// 	let inputValue = form.input.value;
	// 	alert('Your name is:' + inputValue);
	// }
	return (
		<div>
			<form onSubmit="">
				Name:{' '}
				<input type="text" name="name" value="" placeholder="Your Full Name" />
				<button
					type="button"
					name="button"
					value="Click"
					// onClick={testAlert(this.form)}
				>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Form;
