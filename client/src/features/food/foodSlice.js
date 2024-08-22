import { createSlice } from "@reduxjs/toolkit";
import { fetchAllFoodItems } from "./foodAction";

const initialState = {
    food: [],
    loading: false,
    error: null
}

const foodSlice = createSlice({
    name: 'Food',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllFoodItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllFoodItems.fulfilled, (state, action) => {
                state.loading = false;
                state.food = action.payload;
            })
            .addCase(fetchAllFoodItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default foodSlice.reducer;