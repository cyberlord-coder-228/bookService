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

async function createBook(data) {
 const books = bookLib.get();
 const _id = books.length;
  const newBook = { _id, ...data };
  books.push(newBook);
  bookLib.write(books);
 return newBook;
}

export { getAllBooks, getBookById, createBook };

