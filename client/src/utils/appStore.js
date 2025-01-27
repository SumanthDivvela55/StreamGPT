import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice.js";
import movieReducer from "./movieSlice.js"
import gptReducer from './gptSlice.js'
import configReducer from './configSlice.js'

const appStore = configureStore(
    {
        // this reducer contains different reducers from different slices
        reducer: {
            user: useReducer,
            movies: movieReducer,
            gpt: gptReducer,
            config: configReducer
        }
    }
)

export default appStore