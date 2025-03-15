import React from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";


function Card({card, likeCourses, setLikeCourses}){
    const navigate = useNavigate();
    const likeHandler = () =>{
        if(likeCourses.includes(card.id)){
            setLikeCourses(likeCourses.filter((courseId) => courseId !== id));
            toast.error("Course Unliked successfully!")
        }else{
            setLikeCourses([...likeCourses, props.id]);
            toast.success("Course liked successfully!");
        }
    }

    const goToBlogHandler = () =>{
        console.log("redirected to blog: ",card.id);
        navigate(`/blog/${card.id}`);
    }

    const limitWords = (text, wordLimit) => {
        if (!text) return ""; // Handle empty content
        const words = text.trim().split(" ");
        return words.length > wordLimit 
            ? words.slice(0, wordLimit).join(" ") + "..." 
            : text;
    };
    
    return (
        <div className=" bg-slate-800 border border-slate-500 rounded-lg text-white animate-fadeInUp">
            <Link to="">
                <img className="w-sm h-[190px] mx-auto rounded-t-lg" src={card.image_url} alt="card image"/>
            </Link>
            <div className="pb-5 pt-1 px-3">
                <Link to="">
                    <h5 className="mb-2 text-md font-semibold tracking-tight ">{limitWords(card.title, 6)}</h5>
                </Link>
                <div className="h-[75px] md:h-[100px]  mb-2 font-normal text-slate-300 text-xs md:text-sm" dangerouslySetInnerHTML={{ __html: limitWords(card.content, 20) }} />
                {/* <p className="mb-2 font-normal text-slate-300 text-sm ">{limitWords(card.content, 20)}</p> */}
                <div className="flex justify-between">
                    <button onClick={goToBlogHandler} className="border-t border-b-2 border-red-600 shadow-sm shadow-red-500 hover:bg-red-600 font-semibold px-2 rounded-lg">Open Blog</button>
                    <button ><FaHeart className={`text-2xl mt-2 ${(card.likeCourses)?.includes(card.id) ? "text-red-600" : "text-slate-100"} `}/></button>
                </div>
                
            </div>
        </div>
    )
}

export default Card;