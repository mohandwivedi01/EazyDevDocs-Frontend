import axios from "axios";
import { login, logout } from "../store/authSlice";

// Step 1: Create a new instance of Axios
const API_URL = import.meta.env.VITE_BACKEND_API;


const loginService = async (username, password, dispatch) => {
    try {
        if(!username || !password) {
            throw error("Username or password can't be empty");
        }
        const response = await axios.post(`${API_URL}/public/login`, {
            userName: username,
            password: password
        })
        if(!response){
            throw error("response not found")
        }
        const token = response.data;
        
        if(!token){
            throw error("token is missing")
        }
        
        // Dispatch Redux action to update auth state
        dispatch(login({"token": token, "userData": username}))
        // Store the token securely
        localStorage.setItem("token", token);
        // console.log("Login successful!", response.data);
        return true;
        
    } catch (error) {
        
        console.error("something went wrong while tring to login.", error);
        throw error;
    }
}


const signupService = async (username, password, dispatch, role) => {
    console.log("3")
    try {
        console.log("4")
        const response = await axios.post(`${API_URL}/public/signup`, {
            userName: username,
            password: password,
            roles: role || ["USER"]
        });
        console.log("5")

        console.log("Signup successful:", response.data);
        loginService(username, password, dispatch);
        return true; // Return response for further processing
    } catch (error) {
        console.error("Signup failed:", error.response?.data || error.message);
        throw error; // Rethrow for handling in UI
    }
};


const logoutService = (dispatch) => {
    dispatch(logout());
}

export default {loginService, signupService, logoutService};