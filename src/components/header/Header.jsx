import React, { useEffect, useRef, useState } from "react";
import Logo from "../logo/Logo";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import auth from "../../auth/auth";
import { toast } from "react-toastify";
import { FaEdit, FaEllipsisV, FaSignOutAlt } from "react-icons/fa";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.status);
    const optionsRef = useRef(null)
    const [options, setOptions] = useState(false);
    

        useEffect(() => {
            const handleClickOutside = (event) => {
                if (optionsRef.current && !optionsRef.current.contains(event.target)) {
                    setOptions(false);
                }
            };
    
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        },[])

    const logOutHandler = () => {
        if (isAuthenticated) {
            console.log("logging out")
            auth.logoutService(dispatch);
            toast.info("User logged out successfully!")
            navigate("/");
        } 
    }

    return (
        <header className="fixed w-full top-0 bg-slate-800/95 text-white z-50">
            <nav className=" border-t border-b-2 border-red-600 shadow-md shadow-red-500">
                <div className="max-w-screen-xl lg:mx-20 mx-auto flex flex-wrap items-center justify-between py-2">
                    <Logo />
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden " aria-controls="navbar-dropdown" aria-expanded="true">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden md:flex w-full md:w-auto" id="navbar-dropdown">
                        <div className="flex justify-center items-center mx-5">
                            <ul className="flex font-medium p-4 md:p-0 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                                <li>
                                    <Link to="/" className="block font-semibold hover:text-red-500 md:p-0 " aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to="/" className="block font-semibold hover:text-red-500 md:p-0">About</Link>
                                </li>
                                <li>
                                    <Link to="/" className="block font-semibold hover:text-red-500 md:p-0">Contact</Link>
                                </li>
                                {isAuthenticated && <li>
                                    <Link to="/all-blogs" className={`$ font-semibold hover:text-red-500 md:p-0`}>All Blogs</Link>
                                </li>}
                                {isAuthenticated && <li>
                                    <Link to="/all-blogs" className={`font-semibold px-3 rounded-md hover:text-red-400 md:p-0 `}>My Blogs</Link>
                                </li>}
                            </ul>
                        </div>
                        {!isAuthenticated && <div className="flex flex-wrap space-x-3 ">
                            <button onClick={() => navigate("/login")} className="border-t border-b-2 border-red-600 shadow-sm shadow-red-500 hover:bg-red-600 font-semibold px-2 lg:py-1 rounded-lg">Login</button>
                            <button onClick={() => navigate("/signup")} className="border-t border-b-2 border-red-600 shadow-sm shadow-red-500 hover:bg-red-600 font-semibold px-2 lg:py-1 rounded-lg">Sign Up</button>
                        </div>}

                        {isAuthenticated && <div className="">

                            <button onClick={() => setOptions(!options)} className="text-slate-300 rounded-full p-1 pt-2 hover:bg-slate-600"><FaEllipsisV /></button>

                            {options && <div ref={optionsRef} className="fixed end-16 top-6 bg-slate-500 rounded-md border-2 border-slate-500 animate-fadeInUp  ">
                                <button onClick={() => navigate("/post-blog")} className="flex w-full items-center text-sm py-1 px-2 pt-2 hover:bg-red-500 hover:rounded-t-md"><FaEdit className="mr-1" />Post blog</button>
                                <button onClick={logOutHandler} className="flex w-full items-center text-sm py-1 px-2 pb-2 hover:bg-red-500 hover:rounded-b-md"><FaSignOutAlt className="mr-1"/>Logout</button>
                            </div>}
                        </div>}
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header;