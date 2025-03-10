import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    status: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") || null,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.token = action.payload.token;
            state.userData = action.payload.userData;
            localStorage.setItem("token", action.payload.token);
        },
        logout: (state) => {
            state.status = false;
            state.token = null;
            state.userData = null;
            localStorage.removeItem("token");
        }
    }
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;