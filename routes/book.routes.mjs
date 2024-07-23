import express from 'express';
import book from '../controllers/book.controller';

const router = express.Router();

router.get('/', book.get);

export router;