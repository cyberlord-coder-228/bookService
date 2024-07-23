const booksFilePath = './data/books.json';
import * as fs from 'fs';

function get() {
  return JSON.parse(fs.readFileSync(booksFilePath, 'utf8'));
}

function write(books) {
  fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2));
}

export { get, write };
