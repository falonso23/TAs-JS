function generatePassword(length) {
	if(length < 8) {
		console.log('Length should be at least 8');
		return;
	}
	const lower = 'abcdefghijklmnopqrstuvwxyzv';
	const upper = lower.toUpperCase();
	const symbols = "./,-;?!"
	const numbers = "0123456789";
	const characters = [...lower, ...upper, ...symbols, ...numbers];
	
	let password = [];
	password.push(lower[Math.floor(Math.random()*lower.length)]);
	password.push(lower[Math.floor(Math.random()*lower.length)]);
	password.push(upper[Math.floor(Math.random()*upper.length)]);
	password.push(upper[Math.floor(Math.random()*upper.length)]);
	password.push(numbers[Math.floor(Math.random()*numbers.length)]);
	password.push(numbers[Math.floor(Math.random()*numbers.length)]);
	password.push(symbols[Math.floor(Math.random()*symbols.length)]);
	password.push(symbols[Math.floor(Math.random()*symbols.length)]);
	
	for(let i = 0; i <= length - password.length; i++) {
		password.push(characters[Math.floor(Math.random()*characters.length)]);
	}
	password = password.sort(function(){return 0.5-Math.random()}).join('');

	console.log(password)
	console.log(password.length)
}

generatePassword(10)