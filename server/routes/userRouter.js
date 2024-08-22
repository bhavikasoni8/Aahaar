import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';

const router = express.Router();

router
    .post('/login', loginUser)
    .post('/register', registerUser)

export { router as userRouter };