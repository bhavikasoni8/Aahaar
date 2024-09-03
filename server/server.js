import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from "./config/dbConnection.js";
import { cartRouter } from "./routes/cartRouter.js";
import { userRouter } from "./routes/userRouter.js";
import { foodRouter } from "./routes/foodRouter.js";

dotenv.config();
connectDb()

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use('/api/cart',cartRouter)
app.use('/auth',userRouter)
app.use('/api/food',foodRouter)

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});