import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootSlice";

export default configureStore({
    reducer: {
        root: rootReducer,
    },
});