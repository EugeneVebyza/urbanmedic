import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk(
    'root/getUsers',
    async(seed, thunkAPI) => {


        const response = await axios.get(`https://randomuser.me/api/?seed=${seed}`);
        localStorage.setItem('seed', seed);




        console.log(seed)
        console.log(thunkAPI)
        console.log(response.data)

        return response.data;
    }
);


const rootSlice = createSlice({
    name: 'root',
    initialState: {
        users: [],
        status: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(getUsers.pending, state => {
                state.error = null;
                // state.status = state.newsList.length === 0 ? 'pending' : 'updating';
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })

    },
});

export default rootSlice.reducer;