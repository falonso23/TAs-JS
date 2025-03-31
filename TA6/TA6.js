function convertToCelsius(temp) {
	console.log(parseFloat((temp - 32) * 5/9).toFixed(1))
}

function convertToFahrenheit(temp) {
	console.log(parseFloat((temp  * 9/5) + 32).toFixed(1));
}

convertToFahrenheit(0);

convertToCelsius(100);