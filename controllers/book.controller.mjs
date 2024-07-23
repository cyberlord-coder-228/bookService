import * as booksService from "../services/book.service.mjs";

async function get(req, res) {
	try {
		res.send(await booksService.getAllBooks());
	} catch(e) {
		console.error('Error while getting books: ', e);
	}
}

export { get };