import asyncHandler from 'express-async-handler';
import Food from '../models/Food.js';

export const getAllFoodItems = asyncHandler(async (req, res) => {
    try {
        const food = await Food.find()
        return res.status(200).json(food)
    } catch (error) {
        console.log(error);
    }
});

export const getFoodItemById = asyncHandler(async () => { })