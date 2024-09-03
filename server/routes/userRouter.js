import express from 'express';
import { getUserDetails, loginUser, registerUser } from '../controllers/userController.js';
import validateToken from '../middlewares/validateToken.js';

const router = express.Router();

router
    .post('/login', loginUser)
    .post('/register', registerUser)
    .get('/userdetails', validateToken, getUserDetails)

export { router as userRouter };
