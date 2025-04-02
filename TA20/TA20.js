let originalUrl;
let alternativeUrl = "https://fastly.picsum.photos/id/382/400/400.jpg?hmac=BJSVbce-q-cmCNyMdU7Q0S3drIGWvJFU35L9KYpWF4I"

function setAlternative() {
	const imageContainer = document.getElementById("imgElement");
	originalUrl = imageContainer.src;
	imageContainer.src = alternativeUrl;
}

function setOriginal() {
	const imageContainer = document.getElementById("imgElement");
	imageContainer.src = originalUrl;
}