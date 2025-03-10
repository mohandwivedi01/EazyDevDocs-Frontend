import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaDiscord, FaTwitter, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";

function Footer() {
    return (
        <footer className="mt-10 bg-slate-800 ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 animate-fadeInUp">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Logo className="animate-fadeInUp"/>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Links</h2>
                            <ul className="text-slate-400 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">About</Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">Contect</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
                            <ul className="text-slate-400 font-medium">
                                <li className="mb-4">
                                    <Link to="https://github.com/mohandwivedi01" className="hover:underline ">Github</Link>
                                </li>
                                <li>
                                    <Link to="https://discord.gg" className="hover:underline">Discord</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                            <ul className="text-slate-400 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-slate-500 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-slate-400 sm:text-center">© 2025 <Link to="https://flowbite.com/" className="hover:underline">Mohan Dev™</Link>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-slate-400 hover:text-red-500 ms-5">
                            <FaLinkedin className="w-5 h-5 animate-fadeInUp"/>
                        </Link>
                        <Link to="#" className="text-slate-400 hover:text-red-500 ms-5">
                            <FaGithub className="w-5 h-5 animate-fadeInUp"/>
                        </Link>
                        <Link to="#" className="text-slate-400 hover:text-red-500 ms-5">
                            <FaTwitter className="w-5 h-5 animate-fadeInUp"/>
                        </Link>
                        <Link to="#" className="text-slate-400 hover:text-red-500 ms-5">
                            <FaDiscord className="w-5 h-5 animate-fadeInUp"/>
                        </Link>
                        <Link to="#" className="text-slate-400 hover:text-red-500 ms-5">
                            <FaInstagram className="w-5 h-5 animate-fadeInUp"/>
                        </Link>
                        <Link to="#" className="text-slate-400 hover:text-red-500 ms-5">
                            <FaGlobe className="w-5 h-5 animate-fadeInUp"/>
                        </Link>
                        <Link to="#" className="text-slate-400 hover:text-red-500 ms-5">
                            <FaYoutube className="w-5 h-5 animate-fadeInUp"/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;