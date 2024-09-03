import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import validator from 'validatorjs';
// import { OAuth2Client } from 'google-auth-library';

const createToken = (id) => {

    console.log(id);

    return jwt.sign({ id },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '24h' }
    )
}

export const registerUser = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { username, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.json({ success: false, message: "User already exists" })
        }

        // if (!validator.isEmail(email)) {
        //     return res.json({ message: "Please enter a valid email" })
        // }
        // if (password.length < 8) {
        //     return res.json({ message: "Please enter a strong password" })
        // }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        })
        const token = createToken(newUser._id)
        res.json({newUser, token})

    } catch (error) {
        console.log(error);
        res.json({ message: "Error" })
    }
})

export const loginUser = asyncHandler(async (req, res) => {
    console.log("req.body: ", req.body)
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        console.log(user);
        if (!user) {
            return res.status(400).json({ success: false, message: "User does not exist" });
        }
        const passwordCorrect = await bcrypt.compare(password, user.password)

        if (!passwordCorrect) {
            return res.status(401).json({ success: false, message: "Password is incorrect" });
        }

        const accessToken = createToken(user._id);
        return res.json({ success: true, accessToken, user });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export const getUserDetails = asyncHandler(async (req, res) => {
    const userId = req.user;
    const token = req.token;
    if (!userId) {
        res.status(400).json({ message: "user id not recieved" })
    }
    const user = await User.findOne({ _id: userId })
    res.json({ user, token })
});

