import bookLib from "../lib/book.lib";

export async function getAllBooks() {
	const books = bookLib.get();
	return books;
}
