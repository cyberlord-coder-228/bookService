import express from 'express';
import * as book from '../controllers/book.controller.mjs';

const router = express.Router();

router.get('/', book.get);
router.get('/:id', book.getById);
router.post('/', book.createBook);

export { router };
