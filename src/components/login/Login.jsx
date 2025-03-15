import React, {useState} from "react";
import Logo from "../logo/Logo";
import {Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import  auth from "../../auth/auth";
import { Commet } from "react-loading-indicators";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState()


    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        if(!username){
            toast.error("Username is required");
            setLoading(false);
            return;
        }
        if(!password){
            toast.error("Password is required");
            setLoading(false);
            return;
        }
        try {
            const response = await auth.loginService(username, password, dispatch)
            console.log("response: ",response);
            if(!response){
                throw error("Login failed");
            }
            toast.success("login successful");
            setLoading(false);
            navigate("/");
        } catch (error) {
            toast.error("Login failed: " + (error.response?.data?.message || error.message));
            setLoading(false);
        }
    } 

    if (loading) {
        return (
            <div className="mt-4 flex justify-center items-center min-h-screen w-full text-center bg-slate-900">
                <Commet color="#ff3030" size="small" text="" textColor="" />
            </div>
        )
    }

    return (
        <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 text-white">
                <Logo className="mb-5"/>
                <div className="w-full bg-slate-800/60 rounded-lg shadow-md shadow-red-500 md:mt-0 sm:max-w-md xl:p-0 border border-red-500"> 
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                            Sign In to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                            <div>
                                <label for="email" className="block mb-2 text-md font-medium ">Your email</label>
                                <input type="email" name="email" id="email" className="border border-slate-500 focus:border-slate-300 focus:outline-none rounded-lg block w-full p-2.5 bg-slate-700 " placeholder="name@company.com" required="" onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-md font-medium">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="border border-slate-500 focus:border-slate-300 focus:outline-none rounded-lg block w-full p-2.5 bg-slate-700 " required="" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-slate-500 rounded focus:ring-3 focus:ring-primary-300" required/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="text-gray-300 ">Remember me</label>
                                    </div>
                                </div>
                                <Link to="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</Link>
                            </div>
                            <button onClick={submitHandler} type="submit" className="w-full border-t border-b-2 border-red-500 shadow-sm shadow-red-500 hover:bg-red-500 font-semibold py-2 rounded-lg">Sing In</button> 
                            <p className="text-sm font-light text-slate-400">
                                Don’t have an account yet? <Link to="/signup" className="text-red-500 font-medium text-primary-600 hover:underline ">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;