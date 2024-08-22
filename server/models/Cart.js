import mongoose from "mongoose";

const Schema = mongoose.Schema

const Cart = new Schema({
    items: [{
        foodId: { type: Schema.Types.ObjectId, ref: 'Food' },
        title: { type: String, required: true },
        quantity: { type: Number, default: 1 },
        price: { type: Number, required: true }
    }],
    totalPrice: { type: Number, default: 0 }
})

export default Cart;