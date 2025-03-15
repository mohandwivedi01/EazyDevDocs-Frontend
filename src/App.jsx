import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import axiosInstance from "./auth/axiosInstance.js"
import axios from 'axios'
import { toast } from'react-toastify'
import auth from './auth/auth.js'
import { useDispatch } from 'react-redux'

const API_URL = import.meta.env.VITE_BACKEND_API;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      try {
        const response = await axiosInstance.get(`${API_URL}/public`)        
        console.log("response: ", response);
      } catch (error) {
        auth.logoutService(dispatch);
        toast.error("Your Loged in please log in again...")
      }
    }
    fn();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
