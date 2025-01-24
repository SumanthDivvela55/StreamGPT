import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice.js";
import movieReducer from "./movieSlice.js"

const appStore = configureStore(
    {
        // this reducer contains different reducers from different slices
        reducer: {
            user: useReducer,
            movies: movieReducer
        }
    }
)

export default appStore