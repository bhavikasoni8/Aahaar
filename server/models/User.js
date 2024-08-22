import mongoose, { Schema } from "mongoose"
import Cart from "./Cart.js";

const userSchema = mongoose.Schema({
    username: { type: String, required: [true, 'Please add a username'] },
    email: { type: String, require: [true, "Please add an email"], unique: [true, "Email address already taken"] },
    password: { type: String, required: [true, "Please add a password"] },
    cart: { type: Cart, default: () => ({ items: [], totalPrice: 0 }) }
})

const User = mongoose.model('User', userSchema)

export default User;