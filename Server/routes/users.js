import express from 'express';
import { addUsers, addUsersWithFile } from '../Controller/UserData.js';

const router = express.Router();

router.post('/addUser',addUsersWithFile);

export default router;
