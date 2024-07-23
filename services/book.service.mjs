import * as bookLib from "../lib/book.lib.mjs";

async function getAllBooks() {
	const books = bookLib.get();
	return books;
}

export { getAllBooks };
