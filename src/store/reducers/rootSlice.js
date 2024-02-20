import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk(
    'root/getUsers',
    async(seed) => {
        const response = await axios.get(`https://randomuser.me/api/?seed=${seed}`);

        return response.data.results;
    }
);

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        users: JSON.parse(localStorage.getItem('users')) || null,
        status: null,
        error: null,
        seed: localStorage.getItem('seed') || null,
    },
    reducers: {
        setSeed: (state, action) => {
            state.seed = action.payload;
            localStorage.setItem('seed', action.payload);
        },
        removeSeed: (state) => {
            state.seed = null;
            state.users = [];
            localStorage.removeItem('seed');
            localStorage.removeItem('users');
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getUsers.pending, state => {
                state.error = null;
                // state.status = state.newsList.length === 0 ? 'pending' : 'updating';
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'fulfilled';

                const users = action.payload.map(user => ({
                    id: user.id.value,
                    firstname: user.name.first,
                    lastname: user.name.last,
                    gender: user.gender,
                    email: user.email,
                }));

                state.users = users;
                localStorage.setItem('users', JSON.stringify(users));


            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })

    },
});

export const { removeSeed, setSeed } = rootSlice.actions;

export default rootSlice.reducer;