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

async function updateBookById(id, data) {
 const books = bookLib.get();
  const bookIndex = books.findIndex(b => b._id === parseInt(id));
  if (bookIndex === -1) throw new Error('Book not found');
  const updatedBook = { ...books[bookIndex], ...data };
  books[bookIndex] = updatedBook;
  bookLib.write(books);
  return updatedBook;
};

export { getAllBooks, getBookById, createBook, updateBookById };


