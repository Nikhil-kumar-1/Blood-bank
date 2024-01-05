import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    user: null,
    token:null,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {}, // Your slice reducers will go here
    extraReducers: {} // Additional reducers based on actions from other slices
});

export const { actions, reducer } = authSlice;
export default authSlice.reducer;

