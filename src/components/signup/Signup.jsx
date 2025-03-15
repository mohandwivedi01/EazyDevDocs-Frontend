import React, {useState} from "react";
import Logo from "../logo/Logo";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../auth/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Commet } from "react-loading-indicators";

function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [loading, setLoading] = useState();

    const signupHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        const role = ["USER"]
        if(!username){
            toast.error("Username is required");
            setLoading(false);
            return;
        }
        if(password!== confirmPass){
            toast.error("Passwords do not match");
            setLoading(false);
            return;
        }
        try {
            await auth.signupService(username, password, dispatch, role);
            toast.success("Account created successfully");
            navigate("/")
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
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Logo className="mb-5"/>
                <div className="w-full bg-slate-800/60 rounded-lg shadow-md shadow-red-500 md:mt-0 sm:max-w-md xl:p-0 border border-red-500">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium">Your email</label>
                                <input type="email" name="email" id="email" className="border border-slate-500 focus:border-slate-300 focus:outline-none rounded-lg block w-full p-2.5 bg-slate-700 " placeholder="name@company.com" required="" onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="border border-slate-500 focus:border-slate-300 focus:outline-none rounded-lg block w-full p-2.5 bg-slate-700 " required onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div>
                                <label for="confirm-password" className="block mb-2 text-sm font-medium">Confirm password</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="border border-slate-500 focus:border-slate-300 focus:outline-none rounded-lg block w-full p-2.5 bg-slate-700 " required="" onChange={(e) => setConfirmPass(e.target.value)}/>
                            </div> 
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="border border-slate-500 focus:border-slate-300 focus:outline-none rounded-lg block w-full p-2.5 bg-slate-700" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label for="terms" className="font-light text-slate-400">I accept the <Link to="#" className="text-red-500 font-medium text-primary-600 hover:underline">Terms and Conditions</Link></label>
                                </div>
                            </div>
                            <button onClick={signupHandler} type="submit" className="w-full border-t border-b-2 border-red-500 shadow-sm shadow-red-500 hover:bg-red-500 font-semibold py-2 rounded-lg">Create an account</button>
                            <p className="text-sm font-light text-slate-400">
                                Already have an account? <Link to="/login" className="text-red-500 font-medium text-primary-600 hover:underline ">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup;