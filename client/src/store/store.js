import { configureStore } from '@reduxjs/toolkit'
import foodReducer from '../features/food/foodSlice';
import cartReducer from '../features/cart/cartSlice';

const store = configureStore({
    reducer: {
        food: foodReducer,
        cart: cartReducer
    }
})

export default store;
