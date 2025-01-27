import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        toggleGptBool:false
    },
    reducers: {
        toggleGpt: (state) => {
            state.toggleGptBool = !state.toggleGptBool;
        },
    }
})

export const { toggleGpt } = gptSlice.actions;

export default gptSlice.reducer;
