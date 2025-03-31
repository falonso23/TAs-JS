function removeFromArray(array, item) {
	array.splice(array.indexOf(item), 1);
	console.log("Array: ", array);
}

removeFromArray("Hello world, test one".split(" "), "test");