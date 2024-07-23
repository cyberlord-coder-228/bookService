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

async function updateBookById(req, res) {
  try {
    res.send(await booksService.updateBookById(req.params.id, req.body));
  } catch(e) {
    res.status(400).send('Book was not updated');
    console.error('Error while updating book: ', e);
  }
}

async function deleteById(req, res) {
  try {
    await booksService.deleteById(req.params.id)
    res.send(`Book with id #${req.params.id} was succcessfully deleted`);
  } catch(e) {
    res.status(404).send(`Book #${req.params.id} not found`);
    console.error('Error while getting book: ', e);
  }
}

export { get, getById, createBook, updateBookById, deleteById };
