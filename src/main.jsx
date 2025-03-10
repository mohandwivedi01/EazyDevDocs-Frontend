import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Provider} from "react-redux"
import AuthLayout from './components/AuthLayout.jsx'
import store from "./store/store.js"
import Blog from './components/blog/Blog.jsx'
import Login from './components/login/Login.jsx'
import Signup from './components/signup/Signup.jsx'
import PostBlog from './components/PostBlog/PostBlog.jsx'
import Home from './components/home/Home.jsx'
import AllBlogs from './components/AllBlogs/AllBlogs.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      { 
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path: "/all-blogs",
        element: (
          <AuthLayout authentication={true}>
            <AllBlogs />
          </AuthLayout>
        )
      },
      {
        path: "/my-blogs",
        element: (
          <AuthLayout authentication={true}>
            <AllBlogs />
          </AuthLayout>
        )
      },
      {
        path: "/blog/:blogId",
        element: (
          <AuthLayout authentication={true}>
            <Blog />
          </AuthLayout>
        )
      },
      {
        path: "/post-blog",
        element: (
          <AuthLayout authentication={true}>
            <PostBlog />
          </AuthLayout>
        )
      },
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
    <ToastContainer />
  </Provider>,
)
