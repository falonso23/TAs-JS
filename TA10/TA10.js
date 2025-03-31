function getSum(numbs) {
	const sum = numbs.reduce(add, 0);

	function add(accumulator, a) {
	  	return accumulator + a;
	}
	console.log(sum);
}

getSum([...Array(5).keys()]);
