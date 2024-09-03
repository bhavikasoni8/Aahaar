import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCartDetails = createAsyncThunk(
    'cart/cartDetails',
    async (userId, rejectWithValue) => {
        try {
            console.log({userId});
            
            const response = await axios.get(`http://localhost:8000/api/cart/${userId}`);
            return response.data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    }
)

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async ({ userId, foodData }, rejectWithValue) => {
        try {
            console.log({ userId, foodData });
            const response = await axios.post('http://localhost:8000/api/cart/add', { userId, foodData })
            const addToCartResponse = response.data
            console.log({ addToCartResponse });
            return response.data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    }
)
