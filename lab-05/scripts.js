const checkConfirmation = ev => {
	if (myPassword.value != myConfirmation.value) {
		myConfirmation.setCustomValidity("Wait. What? This doesn't match the password field!");
	} else {
		myConfirmation.setCustomValidity('');
	}
};
