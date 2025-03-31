function leapYears(year) {
	const isLeap = year % 4 === 0 || (year % 100 === 0 && year & 400 === 0);
	console.log(year, isLeap);
}


leapYears(2024);
leapYears(2025);
leapYears(2026);
leapYears(2027);
leapYears(2028);
leapYears(2029);