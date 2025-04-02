const names = ["Troy Armstrong","Jerome Prince","Fay Reid","Louise Donovan","Jorge ORyan","Kyra Carter","Lee Perkins","Bryn Sawyer","Samantha Mccarthy","Maximus Burch"]

function generateList() {
	const ulList = document.getElementById("namesList");
	ulList.innerHTML = `
		${names.map(name => `<li>${name}</li>`).join("")}
	`;

}

function filterList() {
	const filterValue = document.getElementById("inputText").value;
	const ulList = document.getElementById("namesList");
	const items = ulList.getElementsByTagName('li');

	const matchingItems = [...items].filter(item => item.innerHTML.toUpperCase().includes(filterValue.toUpperCase()));
	const nonMatchingItems = [...items].filter(item => !item.innerHTML.toUpperCase().includes(filterValue.toUpperCase()));
	nonMatchingItems.forEach(item => item.style.display = "none");
	matchingItems.forEach(item => item.style.display = "list-item");
}
