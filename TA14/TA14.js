function addItem() {
	const ulElement = document.getElementById("ulList");
	const inputText = document.getElementById("inputText");
	const newLi = document.createElement("li");
	
	newLi.innerHTML = inputText.value;
	ulElement.appendChild(newLi);

	inputText.value = "";
}