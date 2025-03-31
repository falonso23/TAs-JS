function duplicates(numbs) {
	let filtered = numbs.filter((number, index) => numbs.indexOf(number) !== index && numbs.lastIndexOf(number) === index);
	console.log(filtered.length);
	console.log(filtered);
}

duplicates([1, 2, 2, 3, 4, 4, 4, 5] );