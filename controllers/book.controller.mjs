import * as booksService from "../services/book.service.mjs";

async function get(req, res) {
 try {
  res.send(await booksService.getAllBooks());
 } catch(e) {
  res.status(404).send('Books not found');
  console.error('Error while getting books: ', e);
 }
}

async function getById(req, res) {
 try {
  res.send(await booksService.getBookById(req.params.id));
 } catch(e) {
  res.status(404).send(`Book #${req.params.id} not found`);
  console.error('Error while getting book: ', e);
 }
}

async function createBook(req, res) {
 try {
  res.send(await booksService.createBook(req.body));
 } catch(e) {
  res.status(400).send('Book was not created');
  console.error('Error while creating new book: ', e);
 }
}

export { get, getById, createBook };

