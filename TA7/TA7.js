function getTheTitles(books) {
	const bookTitles = books.map(book => book.title);
	console.log(bookTitles);
	return bookTitles;
}

const books = [
	{
		title: 'Book',
		author: 'Name'
	},
	{
		title: 'Book 2',
		author: 'Name2'
	},
	{
		title: 'Book 3',
		author: 'Name'
	},
	{
		title: 'Book 4',
		author: 'Name2'
	}
];

getTheTitles(books)
  