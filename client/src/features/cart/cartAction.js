import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCartDetails = createAsyncThunk(
    'cart/cartDetails',
    async (userId, rejectWithValue) => {
        try {
            console.log(userId);
            const response = await axios.get(`http://localhost:8000/api/cart/${userId}`);
            console.log(response.data);
            
            return response.data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data)
        }
    }
)