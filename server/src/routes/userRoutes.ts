import express from 'express';
import { findOrCreateUser, getAllUsers, deleteUser } from '../controllers/userController';

const router = express.Router();

router.post('/', findOrCreateUser);
router.get('/', getAllUsers);
router.delete('/:id', deleteUser);

export default router;