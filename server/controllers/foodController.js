import asyncHandler from 'express-async-handler';
import Food from '../models/Food.js';

export const getAllFoodItems = asyncHandler(async (req, res) => {
    try {
        const food = await Food.find()
        return res.status(200).json({ message: "Get all food items", food })
    } catch (error) {
        console.log(error);
    }
});

export const getFoodItemById = asyncHandler(async () => { })