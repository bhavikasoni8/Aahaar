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
            const response = await axios.post('http://localhost:8000/auth/login', { email, password })
            localStorage.setItem("accessToken", response.data.accessToken)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const getUserDetails = createAsyncThunk(
    'auth/userDetails',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('accessToken');
            const response = await axios.get('http://localhost:8000/auth/userdetails', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            )
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

