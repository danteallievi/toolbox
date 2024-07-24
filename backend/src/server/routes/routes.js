import express from 'express';

import { getFiles, getFilesList } from '../controllers/files.js';
import checkAuthorization from '../middlewares/auth.js';

const router = express.Router();

router.get('/files/list', checkAuthorization, getFilesList);
router.get('/files/data', checkAuthorization, getFiles);

export default router
