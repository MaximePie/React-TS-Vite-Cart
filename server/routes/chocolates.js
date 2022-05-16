import express from 'express';
import { get, mock, wrongGet } from '../controllers/chocolates.js';

const router = express.Router();

router.get('/', get);
router.get('/mock', mock);
router.get('/wrong', wrongGet);

export default router;
