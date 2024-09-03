import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ username, email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8000/auth/register', { username, email, password })
            localStorage.setItem("accessToken", response.data.token)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            console.log({ email, password });
            const response = await axios.post('http://localhost:8000/auth/login', { email, password })
            localStorage.setItem("accessToken", response.data.token)
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);
