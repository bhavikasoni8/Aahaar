import { configureStore } from '@reduxjs/toolkit'
import foodReducer from '../features/food/foodSlice';
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
    reducer: {
        food: foodReducer,
        cart: cartReducer,
        auth: authReducer,
    }
})

export default store;
