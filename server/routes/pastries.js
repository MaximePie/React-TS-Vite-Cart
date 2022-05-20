import express from 'express';
import { get, mock, create } from '../controllers/pastries.js';

const router = express.Router();

router.get('/', get);
router.get('/mock', mock);
router.post('/', create);

export default router;
