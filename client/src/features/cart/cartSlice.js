import { createSlice } from "@reduxjs/toolkit";
import { fetchCartDetails } from "./cartAction";

const initialState = {
    cart: [],
    loading: false,
    error: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCartDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(fetchCartDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default cartSlice.reducer;