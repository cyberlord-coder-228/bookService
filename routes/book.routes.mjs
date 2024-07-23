import express from 'express';
import validate from '../middlewares/validation.middleware.mjs';
import bookSchema from '../schemas/book.schema.mjs';
import * as book from '../controllers/book.controller.mjs';

const router = express.Router();

router.get('/', book.get);
router.get('/:id', book.getById);
router.post('/', validate(bookSchema), book.createBook);

export { router };
