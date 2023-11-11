import express from 'express';
import { addUsers } from '../Controller/UserData.js';

const router = express.Router();

router.post('/addUser',addUsers);

export default router;
