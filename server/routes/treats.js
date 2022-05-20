import express from 'express';
import { deleteAll, get, mock } from '../controllers/treats.js';

const router = express.Router();

router.get('/', get);
router.get('/mock', mock);
router.get('/delete', deleteAll);

export default router;
