import express from 'express';
import validate from '../middlewares/validation.middleware.mjs';
import * as bookSchemas from '../schemas/book.schema.mjs';
import * as book from '../controllers/book.controller.mjs';

const router = express.Router();

router.get('/', book.get);
router.get('/:id', book.getById);
router.post('/', validate(bookSchemas.create), book.createBook);
router.put('/:id', validate(bookSchemas.update), book.updateBookById);
router.delete('/:id', book.deleteById);

export { router };

