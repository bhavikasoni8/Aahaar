import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllFoodItems = createAsyncThunk(
    'food',
    async () => {
        try {
            const food = await axios.get('http://localhost:8000/api/food')
            console.log(food);
            return food;
        } catch (error) {
            console.log(error);

        }
    }
)