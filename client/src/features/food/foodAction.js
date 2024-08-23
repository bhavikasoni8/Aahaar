import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllFoodItems = createAsyncThunk(
    'food/fetchFood',
    async (_, rejectWithValue) => {
        try {
            const response = await axios.get('http://localhost:8000/api/food')
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
)