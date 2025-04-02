function onWindowResize() {
	const pElement = document.getElementById("sizeElement");
	pElement.innerHTML = `Width: ${window.innerWidth}px, Height: ${window.innerHeight}px`
}

window.onresize = onWindowResize;
