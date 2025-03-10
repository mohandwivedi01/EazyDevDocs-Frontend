import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Commet } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";
import { FaBookOpenReader, FaNewspaper,  FaRegStar, FaStar, } from "react-icons/fa6";
import { PiFilesFill } from "react-icons/pi";
import { FaDollarSign, FaGlobe, FaLaptop, FaRegGrinStars, } from "react-icons/fa";

function Home() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);  // Simulating API call delay, replace with actual API call in real-world scenario.
    }, [])


    if (loading) {
        return (
            <div className="mt-4 flex justify-center items-center min-h-screen w-full text-center bg-slate-900">
                <Commet color="#ff3030" size="small" text="" textColor="" />
            </div>
        )
    }
    return (
        <div className="text-white">
            <div
                className="bg-[url('https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?t=st=1740371907~exp=1740375507~hmac=5fe21cdbb7231672bafe4c1ae870d08f76c2ca537d80159df0484f82551182f5&w=1380')] bg-cover bg-center h-screen w-full relative lg:min-h-screen 2xl:min-h-[730px] before:absolute before:inset-0 before:w-full before:bg-slate-950 before:opacity-60">

                <div className="h-screen flex items-center justify-center">
                    <div className="max-w-5xl mx-auto text-center relative px-4 sm:px-10">
                        <h1 className="lg:text-7xl md:text-6xl text-4xl font-semibold mb-6 md:!leading-[80px] animate-fadeInUp">Unleash Your Thoughts, Inspire the World</h1>
                        <p className="text-base text-gray-400 animate-fadeInUp">Welcome to the  ultimate platform for passionate writers, storytellers, and thinkers! Whether you’re here to share your personal journey, express your expertise, or dive into meaningful conversations—your words matter. Join a thriving community of bloggers, publish your thoughts effortlessly, and let your voice be heard across the globe. From tech enthusiasts to travel junkies, food lovers to creative minds—this is where ideas take flight. So, why wait? Start crafting your story today!.</p>
                        <div className="grid sm:grid-cols-3 gap-6 items-center mt-16">
                            <div className="flex flex-col items-center text-center">
                                <h5 className="font-bold text-2xl text-red-600 mb-2">100+</h5>
                                <p>Active Contributors</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <h5 className="font-bold text-2xl text-red-600 mb-2">500+</h5>
                                <p>Dev Docs</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <h5 className="font-bold text-2xl text-red-600 mb-2">50+</h5>
                                <p>Tech Domains</p>
                            </div>
                        </div>
                        <div className="mt-14 flex gap-x-8 gap-y-4 justify-center max-sm:flex-col">
                            <button onClick={() => navigate("/post-blog")} type='button'
                                className="px-6 py-3.5 border-t border-b-2 border-red-500 shadow-sm shadow-red-600 bg-red-600 hover:bg-red-700 font-semibold rounded-lg animate-fadeInUp">Start Now</button>
                            <button onClick={() => navigate("/signup")} type='button'
                                className="px-6 py-3.5 border-t border-b-2 border-red-600 shadow-sm shadow-red-600 hover:bg-red-600 font-semibold rounded-lg animate-fadeInUp">Create Account</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-10">
                <div className="mt-32 max-w-7xl mx-auto ">
                    <div className="mb-16 max-w-2xl text-center mx-auto">
                        <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Our Features</h2>
                        <p className="text-gray-400 animate-fadeInUp">Share your ideas effortlessly, connect with readers worldwide, and turn your passion into impactful blogs.</p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-16 ">
                        <div className="text-center px-6 py-8 bg-slate-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-slate-200 rounded-2xl shadow-xl shadow-red-500/50 animate-fadeInUp">
                            <FaLaptop className="mx-auto w-12 h-12 text-4xl p-2 text-red-600 border border-red-600 shadow-md shadow-red-600 rounded-xl mb-5" />
                            <h3 className="text-xl mb-4">✨ Effortless Writing & Publishing</h3>
                            <p className="text-gray-400">Write, edit, and publish stunning blogs with our intuitive editor. No distractions, just pure creativity.</p>
                            <Link to="javascript:void(0);" className="text-red-500 inline-block mt-4 hover:underline">Learn more</Link>
                        </div>
                        <div className="text-center px-6 py-8 bg-slate-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-slate-200 rounded-2xl shadow-xl shadow-blue-500/50 animate-fadeInUp">
                            <FaGlobe className="mx-auto w-12 h-12 text-4xl p-2 text-red-600 border border-red-600 shadow-md shadow-red-600 rounded-xl mb-5" />

                            <h3 className="text-xl mb-4">🌍 Reach a Global Audience</h3>
                            <p className="text-gray-400">Your words deserve an audience. Get discovered, build your following, and connect with readers worldwide.</p>
                            <Link to="javascript:void(0);" className="text-red-500 inline-block mt-4 hover:underline">Learn more</Link>
                        </div>
                        <div className="text-center px-6 py-8 bg-slate-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-slate-200 rounded-2xl shadow-xl shadow-red-500/50 animate-fadeInUp">
                            <FaDollarSign className="mx-auto w-12 h-12 text-4xl p-2 text-red-600 border border-red-600 shadow-md shadow-red-600 rounded-xl mb-5" />
                            <h3 className="text-xl mb-4">🔥 Monetize Your Passion</h3>
                            <p className="text-gray-400">Turn your passion into income! Enable ads, set up subscriptions, or partner with brands to earn from your content.</p>
                            <Link to="javascript:void(0);" className="text-red-500 inline-block mt-4 hover:underline">Comming soon...</Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto text-center mt-32">
                    <div>
                        <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Fuel Your Passion for Learning with Our Diverse Blog Content</h2>
                        <p className="text-gray-400">Embark on a journey of continuous learning and self-improvement. Our blog offers a wealth of resources to help you expand your knowledge, develop new skills, and stay ahead of the curve. Explore in-depth articles, expert interviews, and practical guides on a variety of subjects, all designed to empower you with valuable insights and information.</p>
                    </div>
                    <button onClick={() => navigate("/all-blogs")} className='px-6 py-3.5 border-t border-b-2 border-red-600 shadow-md shadow-red-600 hover:bg-red-600 font-semibold rounded-lg mt-10'>Get
                        started
                        today</button>
                </div>

                <div className="mt-32 shadow-xl shadow-blue-500/50 rounded-lg px-4 py-12">
                    <div className="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
                        <div>
                            <img src="https://wepik.com/api/image/local/155932983/9e5d8c4a-c5b2-46e7-b480-f6493600e37b?expires=1741320000&thumb=0&transparent=0&signature=28682039de62888a1ad140498fdd7a3be8b22d383e7305690b39a4ce88ddd48a" alt="Premium Benefits" className="w-full mx-auto" />
                        </div>
                        <div className="max-md:text-center">
                            <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Write Smarter, Not Harder, Unlock Your Writing Potential with AI</h2>
                            <p className="text-gray-400">Enhance your writing process with our integrated AI. Generate ideas, refine content, and optimize your blog posts for maximum impact. Ditch the struggle, embrace the future of writing. Our AI makes blogging smarter, faster, and more enjoyable.</p>
                            <button type="button"
                                className="px-6 py-3.5 border-t border-b-2 mt-10 border-red-600 shadow-sm shadow-red-600 hover:bg-red-600 font-semibold rounded-lg ">
                                Comming soon...
                            </button>
                        </div>
                    </div>
                </div>



                <div className="mt-32 px-4 py-12 shadow-xl shadow-pink-500/50 rounded-lg">
                    <div className="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
                        <div className="max-md:text-center">
                            <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Write Globally, Connect Deeply, Unleash Your Words on the World</h2>
                            <p className="text-gray-400">Connect with a global audience of passionate readers. Share your stories, insights, and ideas with people from all corners of the world. Join a diverse community of writers and readers from across the globe. Share your unique perspective, learn from others, and build connections that transcend borders.</p>
                            <button onClick={() => navigate("/all-blogs")} type="button"
                                className="px-6 py-3.5 border-t border-b-2 border-red-600 shadow-sm shadow-red-600 hover:bg-red-600 font-semibold rounded-lg mt-10">
                                Try it today
                            </button>
                        </div>
                        <div>
                            <img src="https://wepik.com/api/image/local/155932983/9e5fb26f-5465-407f-81a6-a160df40c269?expires=1741406400&thumb=0&transparent=0&signature=c9699336411f455f94315182fb0e71af4ddcd5c75e0bdb63285d4929d57f2d80" alt="Premium Benefits" className="w-full mx-auto " />
                        </div>
                    </div>
                </div>



                <div className="mt-32 max-w-7xl mx-auto ">
                    <div className="mb-16 max-w-2xl text-center mx-auto">
                        <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">User's feedback</h2>
                        <p className="text-gray-400">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit
                            deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 max-md:justify-center text-center mt-16">
                        <div>
                            <div className="flex flex-col items-center">
                                <img src="https://readymadeui.com/profile_2.webp"
                                    className="w-24 h-24 rounded-full shadow-xl border-2 border-white" />
                                <div className="mt-4">
                                    <h4 className="text-base">John Doe</h4>
                                    <p className="text-xs text-red-600 mt-2">Working Professional</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-gray-400">As a busy professional, I don't have a lot of time to write. But this platform makes it so easy! The AI tools help me create high-quality content quickly, and I've seen a significant increase in engagement on my blog since I started using it.</p>
                            </div>
                            <div className="flex justify-center space-x-2 mt-4">
                                <FaStar className="text-red-600" />
                                <FaStar className="text-red-600" />
                                <FaStar className="text-red-600" />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-center">
                                <img src="https://readymadeui.com/profile_3.webp"
                                    className="w-24 h-24 rounded-full shadow-xl border-2 border-white" />
                                <div className="mt-4">
                                    <h4 className="text-base">Mark Adair</h4>
                                    <p className="text-xs text-red-600 mt-2">Student</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-gray-400">I love how easy it is to use this platform to create and share blog posts. It's helped me connect with other students who share my interests, and the feedback I've received has been invaluable.</p>
                            </div>
                            <div className="flex justify-center space-x-2 mt-4">
                                <FaStar className="text-red-600" />
                                <FaStar className="text-red-600" />
                                <FaStar className="text-red-600" />
                                <FaStar className="text-red-600" />
                                <FaStar className="text-red-600" />
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-center">
                                <img src="https://readymadeui.com/profile_4.webp"
                                    className="w-24 h-24 rounded-full shadow-xl border-2 border-white" />
                                <div className="mt-4">
                                    <h4 className="text-base">Simon Konecki</h4>
                                    <p className="text-xs text-red-600 mt-2">Student</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-gray-400">This platform has been a game-changer for me! As a student, it's helped me improve my writing skills and share my thoughts with a wider audience. The AI tools are super helpful for generating ideas and overcoming writer's block.</p>
                            </div>
                            <div className="flex justify-center space-x-2 mt-4">
                                <FaStar className="text-red-600" />
                                <FaStar className="text-red-600" />
                                <FaStar className="text-red-600" />
                                <FaStar className="text-red-600" />
                                <FaRegStar />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-32">
                    <div className="mb-16 max-w-2xl text-center mx-auto">
                        <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Application Metrics</h2>
                        <p className="text-gray-400">To highlight the platform's success, to attract new users, to build trust, etc.</p>
                    </div>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-12">
                        <div className="text-center shadow-xl shadow-blue-500/50 rounded-lg py-5">
                            <FaBookOpenReader className="mx-auto w-9 h-9 " />
                            <h3 className="text-4xl  mt-6">400+</h3>
                            <p className="mt-4">Unique Readers</p>
                        </div>
                        <div className="text-center shadow-xl shadow-pink-500/50 rounded-lg py-5">
                            <FaNewspaper className="mx-auto w-9 h-9" />
                            <h3 className="text-4xl mt-6">1000+</h3>
                            <p className="mt-4">Total Blogs</p>
                        </div>
                        <div className="text-center shadow-xl shadow-green-500/50 rounded-lg py-5">
                            <FaRegGrinStars className="mx-auto w-9 h-9" />
                            <h3 className="text-4xl mt-6">100+</h3>
                            <p className="mt-4">Active Contributors</p>
                        </div>
                        <div className="text-center shadow-xl shadow-red-500/50 rounded-lg py-5">
                            <PiFilesFill className="mx-auto w-9 h-9" />
                            <h3 className="text-4xl mt-6">100+</h3>
                            <p className="mt-4">Topics</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Home;