import express from 'express';
import {  addUsersWithFile, downloadFile, getAllUsers } from '../Controller/UserData.js';

const router = express.Router();

router.post('/addUser',addUsersWithFile);
router.get('/allUser',getAllUsers);
router.get('/download/:id',downloadFile)

export default router;
