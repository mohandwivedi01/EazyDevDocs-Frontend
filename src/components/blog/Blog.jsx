import React, { useEffect, useState, useRef } from "react";
import { FaEdit, FaEllipsisV, FaRegTrashAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../auth/axiosInstance";
import { toast } from "react-toastify";
import { Commet } from "react-loading-indicators";
import PostBlog from "../PostBlog/PostBlog";

const API_URL = import.meta.env.VITE_BACKEND_API;

function Blog() {
    const { blogId } = useParams();
    const [blog, setBlog] = useState();
    const [options, setOptions] = useState(false);
    const optionsRef = useRef(null);
    const editRef = useRef(null);
    const [isEdit, setIsEdit] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axiosInstance.get(`${API_URL}/journal/id/${blogId}`)

                if (!response || !response.data || response.status !== 200) {
                    toast.error("Something went wrong Response not found: ", response.status);
                    throw error("Response not found", response);
                }
                setBlog(response.data.body);
                setLoading(false);
            } catch (error) {
                console.error(`Error fetching blog with id ${blogId}: ${error}`)
                toast.error(`Failed to fetch blog, please try again`)
                setLoading(false);
            }

        };
        if (blogId) fetchBlog();

        const handleClickOutside = (event) => {
            if (optionsRef.current && !optionsRef.current.contains(event.target)) {
                setOptions(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [blogId]);


    console.log("data: ", blog)


    const deleteHandler = async () => {
        if (!window.confirm("Are you sure you want to delete this blog?")) return;
        try {
            const response = await axiosInstance.delete(`${API_URL}/journal/delete/id/${blogId}`)

            if (!response) {
                toast.error("Failed to delete blog, please try again.");
            }

            toast.success("Blog deleted successfully!");
            navigate("/all-blogs");
        } catch (error) {
            console.error(`Error fetching blog with id ${blogId}: ${error}`)
            toast.error("Something went wrong and Failed to delete blog, please try again")
        }
    }

    const editHandler = () => {
        setIsEdit(true);
        setOptions(false);
    }

    if (loading) {
        return (
            <div className="mt-4 flex justify-center items-center min-h-screen w-full text-center bg-slate-900">
                <Commet color="#ff3030" size="small" text="" textColor="" />
            </div>
        )
    }

    return (
        <>
            {isEdit && <PostBlog
                id={blogId}
                className="z-10 relative shadow-xl shadow-pink-500 bg-slate-900"
                title={blog.title}
                content={blog.content}
                image={blog.image}
                category={blog.category}
                lable={"Edit"}
                ref={editRef}
                setIsEdit={setIsEdit}
            />}
            <div className="w-[250px] sm:w-[520px] md:w-[900px] mx-auto justify-items-center mt-7 text-white rounded-md shadow-xl shadow-blue-500/50 animate-fadeInUp">
                <div className="mx-10 py-5">
                    <div className="flex justify-between shadow-xl">
                        <div className="my-5 ">
                            <h1 className="text-3xl font-semibold">{blog?.title}</h1>
                        </div>
                        {!options && <div className="mt-7">
                            <button onClick={() => setOptions(!options)} className="text-slate-300 rounded-full p-1 hover:bg-slate-600"><FaEllipsisV /></button>
                        </div>}

                        {options && <div ref={optionsRef} className=" static z-10 bg-slate-500 rounded-md border border-slate-900 animate-fadeInUp">
                            <button onClick={editHandler} className="flex w-full items-center text-sm py-1 px-2 pt-2 hover:bg-red-500 hover:rounded-t-md"><FaEdit className="mr-1" />Edit</button>

                            <button onClick={deleteHandler} className="flex w-full items-center text-sm py-1 px-2 pb-2 hover:bg-red-500 hover:rounded-b-md"><FaRegTrashAlt className="mr-1" />delete</button>
                        </div>}
                    </div>

                    <hr className="" />

                    <img className="w-[150px] sm:w-[350px] md:w-[900px] mx-auto my-10" src={`${blog?.image_url}`} />

                    <div className="mb-b">
                        <div className="text-lg" dangerouslySetInnerHTML={{ __html: blog?.content }} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Blog;