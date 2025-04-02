function addItem() {
	const inputText = document.getElementById("inputText");
	if(inputText.value === "") return;
	const ulElement = document.getElementById("ulList");
	const newLi = document.createElement("li");
	
	newLi.innerHTML = inputText.value;
	ulElement.appendChild(newLi);

	inputText.value = "";
}

function removeLastItem() {
	const ulElement = document.getElementById("ulList");
	ulElement.removeChild(ulElement.lastChild);
}