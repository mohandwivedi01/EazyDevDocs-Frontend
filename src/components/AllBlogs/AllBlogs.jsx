import React, { useState, useEffect, useId } from "react";
import Card from "../card/Card.jsx";
// import Filters from "../filter/Filters.jsx";
import axiosInstance from "../../auth/axiosInstance.js";
import { toast } from "react-toastify";
import { Commet } from "react-loading-indicators";

const API_URL = import.meta.env.VITE_BACKEND_API;

function AllBlogs(props) {
    const [activeFilter, setActiveFilter] = useState("All")
    const filters = ["All", "Tech", "Business", "Design", "Lifestyle", "Others"]
    const [likeCourses, setLikeCourses] = useState([])
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(`${API_URL}/journal/get-all-journals`);

                // console.log("response: ", response)
                if (response.status === 200) {
                    setBlogData(response.data);
                    setLoading(false);
                }
                if (!response || !response.data) {
                    toast.error("Something went wrong Response not found: ", response.status);
                    throw error("Response not found");
                }
                
            } catch (error) {
                console.error("Error fetching all blogs:", error);
                toast.error(error.message || "Something went wrongg!");
                setLoading(false);
            }
        }
        fetchData();

    }, [])

    // Filter the blog posts based on the selected filter
    if(loading){
        return (
            <div className="mt-4 flex justify-center items-center min-h-screen w-full text-center bg-slate-900">
                <Commet color="#ff3030" size="small" text="" textColor="" />
            </div>
        )
    }

    return (
        <div className="mt-8">
            <div className="flex flex-wrap justify-center text-center space-x-4 my-2 ">
                {filters.map((filter) => (
                    <input key={filter} type="button" className={`text-md font-medium px-4 py-1 rounded-md cursor-pointer ${activeFilter === filter ? " border-b-2 border-red-600 shadow-sm shadow-red-500" : ""}`} value={filter} onClick={(e) => setActiveFilter(e.target.value)} />
                ))}
            </div>

            <div className="w-[250px] md:w-[590px] lg:w-[900px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-5 gap-5 ">
                {
                    blogData
                        .filter((card) => card.journal_category === activeFilter || activeFilter === "All")
                        .map((card) => (
                            <Card
                                key={card.id}
                                card={card}
                                likeCourses={likeCourses}
                                setLikeCourses={setLikeCourses}
                            />
                        ))
                }

            </div>
        </div>

    )
}

export default AllBlogs;
