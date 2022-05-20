import express from 'express';
import {
  deleteAll, get, mock, create,
} from '../controllers/treats.js';

const router = express.Router();

router.get('/', get);
router.get('/mock', mock);
router.get('/delete', deleteAll);
router.post('/', create);

export default router;
