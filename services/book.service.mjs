import * as bookLib from "../lib/book.lib.mjs";

async function getAllBooks() {
	const books = bookLib.get();
	return books;
}

async function getBookById(id) {
 const books = bookLib.get();
  const book = books.find(b => b._id === parseInt(id));
  if (!book) throw new Error('Book not found in database');
  return book;
}

export { getAllBooks };
