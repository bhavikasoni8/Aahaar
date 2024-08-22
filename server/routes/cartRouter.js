import express from 'express';
import { addToCart, getCartDetails, removeFromCart, updateItemQuantity } from '../controller/cartController.js';

const router = express.Router()

router
    .post('/add', addToCart)
    .delete('/remove', removeFromCart)
    .get('/:userId', getCartDetails)
    .post('/update', updateItemQuantity)

export { router as cartRouter }