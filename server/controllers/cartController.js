import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

export const addToCart = asyncHandler(async (req, res) => {
    try {
        const { foodData, userId } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            res.status(400)
            throw new Error('User not found');
        }

        const { title, price, quantity = 1 } = foodData;
        if (!title || !price) {
            res.status(400).json({ message: "Please enter title and price" })
        }

        const existingItem = user.cart.items.findIndex(item => item.title === title);
        if (existingItem > -1) {
            user.cart.items[existingItem].quantity += quantity;
            user.cart.items[existingItem].price += price;
        } else {
            user.cart.items.push({ title, price, quantity })
        }

        user.cart.totalPrice += price * quantity
        await user.save()

        return res.status(200).json({ message: "Item added to cart", user, existingItem });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
});

export const getCartDetails = asyncHandler(async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User does not exist');
        };

        const cart = user.cart;
        if (!cart) {
            res.status(400);
            throw new Error('Cart is empty');
        };

        return res.status(200).json(cart);
    } catch (error) {
        console.log(error);
    }
});