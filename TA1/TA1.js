function repeatString(text, reps) {
	let toReturn = ""
	for(let i = 0; i < reps; i++) {
		toReturn += text;
	}
	console.log(toReturn)
}

repeatString("Hello World", 162);