import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import User from '../models/User.js';
import Food from '../models/Food.js';

export const addToCart = asyncHandler(async (req, res, next) => {
    try {
        const { userId, foodData } = req.body;
        console.log({ userId, foodData });

        // Validate userId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid User ID" });
        }

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Validate food data
        const { title, price, quantity = 1 } = foodData;
        if (!title || !price) {
            return res.status(400).json({ message: "Please enter title and price" });
        }

        // Check if the item already exists in the cart
        const existingItemIndex = user.cart.items.findIndex(item => item.title === title);

        if (existingItemIndex > -1) {
            // Update quantity and price of the existing item
            user.cart.items[existingItemIndex].quantity += quantity;
            user.cart.items[existingItemIndex].price = price; // Ensure price is set correctly
        } else {
            // Add new item with all required fields
            user.cart.items.push({ title, price, quantity });
        }
        // Update the total price
        user.cart.totalPrice += price * quantity;
        await user.save();
        return res.status(200).json({ message: "Item added to cart", user });
    } catch (error) {
        next(error);
    }
});


export const getCartDetails = asyncHandler(async (req, res, next) => {
    try {
        const { userId } = req.params;

        // Validate userId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid User ID" });
        }

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Get the cart
        const cart = user.cart;
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: 'Cart is empty' });
        }

        return res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
});
