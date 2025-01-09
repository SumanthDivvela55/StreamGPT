import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice.js";

const appStore = configureStore(
    {
        // this reducer contains different reducers from different slices
        reducer: {
            user: useReducer,
        }
    }
)

export default appStore