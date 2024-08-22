import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
    title: { type: String, require: true },
    image: { type: String },
    category: { type: [String] },
    price: { type: Number }
})

const Food = mongoose.model('Food', foodSchema)

export default Food;
