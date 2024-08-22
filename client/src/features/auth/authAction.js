import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const registerUser=createAsyncThunk(
    'auth',
    async(_,{rejectWithValue})=>{
        try {
           const user=await axios.post('http://localhost:8080/registerUser')
        } catch (error) {
            console.log(error);
            
        }
    }
)