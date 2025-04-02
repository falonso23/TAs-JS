function submit() {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	setShowError("nameError", false);
	setShowError("emailError", false);
	setShowError("passError", false);
	let hasError = false;

	if(!name) {
		setShowError("nameError", true);
		hasError = true;
	}
	if(!validateEmail(email)) {
		setShowError("emailError", true);
		hasError = true;
	}
	if(!validatePassword(password)) {
		setShowError("passError", true);
		hasError = true;
	}

	if(hasError) {
		return;
	}

	window.alert("Login Exitoso!")
}

function validatePassword(value) {
	return value && value.length >= 8;
}

function validateEmail(value) {
	return value && value.includes("@") && value.includes(".com")
}

function setShowError(id, visible) {
	const errorP = document.getElementById(id);
	errorP.style.display = visible ? "block" : "none";
}