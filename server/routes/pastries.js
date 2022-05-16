import express from 'express';
import { get, mock } from '../controllers/pastries.js';

const router = express.Router();

router.get('/', get);
router.get('/mock', mock);

export default router;
