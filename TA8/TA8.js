function findTheOldest(people) {
	const oldest = people.sort((a, b) => a.yearOfBirth > b.yearOfBirth ? 1 : -1)[0];
	console.log(oldest);
	return oldest;
}

const people = [
	{
	  name: "Carly",
	  yearOfBirth: 1942,
	  yearOfDeath: 1970,
	},
	{
	  name: "Ray",
	  yearOfBirth: 1962,
	  yearOfDeath: 2011,
	},
	{
	  name: "Jane",
	  yearOfBirth: 1942,
	  yearOfDeath: 1941,
	},
	{
	  name: "Bob",
	  yearOfBirth: 1842,
	  yearOfDeath: 1970,
	},
	{
	  name: "Peter",
	  yearOfBirth: 1863,
	  yearOfDeath: 2011,
	},
	{
	  name: "John",
	  yearOfBirth: 2023,
	  yearOfDeath: 1941,
	},
]

findTheOldest(people)