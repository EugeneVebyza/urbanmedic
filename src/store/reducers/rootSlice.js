import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk(
    'root/getUsers',
    async(page, { getState }) => {
        const seed = getState().root.seed;
        const response = await axios.get(`https://randomuser.me/api/?seed=${seed}&page=${page}&results=17&inc=gender,name,email,id`);
        return { page, users: response.data.results };
    }
);

const updateLocalStorage = (key, newItem) => {
    const items = JSON.parse(localStorage.getItem(key)) || [];
    items.push(newItem);
    localStorage.setItem(key, JSON.stringify(items));
};

const removeUserFromLocalStorage = (userId) => {
    const usersInLocalStorage = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsersInLocalStorage = usersInLocalStorage.filter(user => user.id !== userId);
    localStorage.setItem('users', JSON.stringify(updatedUsersInLocalStorage));
}

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        users: JSON.parse(localStorage.getItem('users')) || [],
        status: null,
        error: null,
        seed: localStorage.getItem('seed') || null,
        modalIsOpen: false,
        modalData: null,
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
        openModal: (state, action) => {
            state.modalIsOpen = true;
            state.modalData = action.payload;
        },
        closeModal: (state) => {
            state.modalIsOpen = false;
            state.modalData = null;
        },
        addUser: (state, action) => {
            let randId = Date.now();

            const newUser = {
                id: randId,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                gender: action.payload.gender ? 'female' : 'male',
                email: action.payload.email
            };
            state.users = [newUser, ...state.users];
            updateLocalStorage('users', newUser);


        },
        updateUser: (state, action) => {

            const updatedUsers = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return {
                        ...user,
                        gender: action.payload.gender ? 'female' : 'male'
                    };
                } else {
                    return user;
                }
            });

            const usersInLocalStorage = JSON.parse(localStorage.getItem('users')) || [];
            const updatedUsersInLocalStorage = usersInLocalStorage.map(user => {
                if (user.id === action.payload.id) {
                    return {
                        ...user,
                        gender: action.payload.gender ? 'female' : 'male'
                    };
                } else {
                    return user;
                }
            });
            localStorage.setItem('users', JSON.stringify(updatedUsersInLocalStorage));

            return {...state, users: updatedUsers };

        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
            removeUserFromLocalStorage(action.payload);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getUsers.pending, state => {
                state.error = null;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                const users = action.payload.users.map(user => ({
                    id: user.id.value,
                    firstname: user.name.first,
                    lastname: user.name.last,
                    gender: user.gender,
                    email: user.email,
                    fetched: true,
                }));
                state.users.push(...users);
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })

    },
});

export const { removeSeed, setSeed, openModal, closeModal, addUser, removeUser, updateUser } = rootSlice.actions;

export default rootSlice.reducer;