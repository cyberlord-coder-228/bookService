'use strict';

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { router } from './routes/book.routes.mjs';


const PORT = process.env.PORT || 3000;

const app = express();

app.use('/', router); // /api
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
