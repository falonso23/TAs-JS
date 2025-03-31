function getOdds(numbs) {
	const filtered = numbs.filter(n => n%2 !== 0);
	console.log(filtered);
}


getOdds([...Array(100).keys()]);
