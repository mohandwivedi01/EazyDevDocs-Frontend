import React, { useState, useEffect } from "react";
import RTE from "../RTE/RTE";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../auth/axiosInstance";
import { Commet } from "react-loading-indicators";

const API_URL = import.meta.env.VITE_BACKEND_API;

function PostBlog(props) {
    const navigate = useNavigate();
    const [blog, setBlog] = useState({
        title: props.title ||"",
        content: props.content ||"",
        image: props.image || null,
        category: props.category ||""
    });
    const [loading, setLoading] = useState()

    const postHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        // console.log("blog tdata: ",blog)
        if (!blog.title) {
            toast.error("Please enter a title!");
            setLoading(false)
            return;
        }
        if (!blog.category) {
            toast.error("Please select a category!");
            setLoading(false)
            return;
        }
        if (!blog.content) {
            toast.error("Please add some content!");
            setLoading(false)
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", blog.title);
            formData.append("content", blog.content);
            formData.append("journal_category", blog.category);

            if (blog.image) {
                formData.append("image", blog.image);
            }
            const response = await axiosInstance.post(`${API_URL}/journal/post`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log("response: ", response);
            
            if (!response || response.status !== 201) {
                toast.error("Failed to post blog, please try again.", response?.status, response?.message);
                setLoading(false)
            }
            setLoading(false)
            const id = response.data.match(/id=([\w\d]+)/)[1];
            toast.success("Blog posted successfully!");
            navigate(`/blog/${id}`);
        } catch (error) {
            console.error("Error posting blog:", error);
            toast.error(`Something went wrong: ${error?.response?.data || error.message}`);
            setLoading(false)
        }
    }


    const editHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log("editHandler");
        try {
            const formData = new FormData();
            formData.append("title", blog.title);
            formData.append("content", blog.content);
            formData.append("journal_category", blog.category);

            if (blog.image) {
                formData.append("image", blog.image);
            }
            const response = await axiosInstance.put(`${API_URL}/journal/update/id/${props?.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (!response || (response.status!== 200 && response.status !== 201)) {
                toast.error("Failed to update blog, please try again.");
                throw new Error("Failed to update blog");
            }

            toast.success("Blog updated successfully!");
            props.setIsEdit(false);
            setLoading(false);
            window.location.reload();
        } catch (error) {
            
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
        <div className= {`${props?.className} w-[350px] sm:w-[550px] md:w-[720px] lg:w-[950px] mx-auto mt-10 text-white shadow-xl shadow-blue-500/50 rounded-lg p-10`}>
            <form className="flex flex-wrap text-white">
                <div className="w-4/5 items-center mx-auto mb-8 space-y-4">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0">
                        <label className=" mr-6 lg:text-2xl md:text-xl font-semibold lg:mr-[26px]">Title:</label>
                        <input className="w-full bg-slate-600 px-2 py-1  rounded-lg focus:outline-none focus:ring-slate-500 focus:ring-2" placeholder="enter title here" value={blog.title} required onChange={(e) => setBlog({ ...blog, title: e.target.value })} />
                    </div>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 ">

                        <label className="lg:text-2xl md:text-xl font-semibold">Image:</label>

                        <input type="file" className="md:w-1/3 w-full bg-slate-600 px-2 py-1  rounded-lg focus:outline-none focus:ring-slate-500 focus:ring-2" required onChange={(e) => setBlog({ ...blog, image: e.target.files[0] })} />
                        {/* Category Dropdown */}

                        <div className="space-x-4 flex">
                            <select
                                className="w-full bg-slate-600 px-2 py-2 rounded-lg focus:outline-none focus:ring-slate-500 focus:ring-2"
                                required
                                value={blog.category}
                                onChange={(e) => setBlog({ ...blog, category: e.target.value })}
                            >
                                <option value="">Category</option>
                                <option value="Tech">Tech</option>
                                <option value="Business">Business</option>
                                <option value="Design">Design</option>
                                <option value="LifeStyle">LifeStyle</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>

                        <button onClick={props.lable ? editHandler : postHandler} className="md:w-1/3 w-full border-t border-b-2 border-red-500 shadow-sm shadow-red-500 hover:bg-red-500 font-semibold py-1 rounded-lg text-xl">{props.lable ? props.lable : "Post"}</button>
                    </div>
                </div>
                <RTE name="content" defaultValue={blog.content} setContent={(value) => setBlog({ ...blog, content: value })} />
            </form>
        </div>
    )
}

export default PostBlog;