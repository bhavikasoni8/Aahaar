import express from 'express';
import { getAllFoodItems, getFoodItemById } from '../controllers/foodController.js';

const router = express.Router()

router
    .get('/', getAllFoodItems)
    .get('/:foodId', getFoodItemById)
    // .post()

export { router as foodRouter };
