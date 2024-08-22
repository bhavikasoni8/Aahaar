import { configureStore } from '@reduxjs/toolkit'
import foodReducer from '../features/food/foodSlice';

const store = configureStore({
    reducer: {
        food: foodReducer
    }
})

export default store;
