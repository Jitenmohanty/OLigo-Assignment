import express from 'express';
import {  addUsersWithFile, getAllUsers } from '../Controller/UserData.js';

const router = express.Router();

router.post('/addUser',addUsersWithFile);
router.get('/allUser',getAllUsers);

export default router;
