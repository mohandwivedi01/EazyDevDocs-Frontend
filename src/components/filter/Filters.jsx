import React, { useId } from "react";
import { Link } from "react-router-dom";

function Filters(props){
   
    const chooseFilterHandler = function (event){
        props.setActiveFilter(event.target.value);
    }
    return (
        // <div className="block text-white">
            
        // </div>
        <div className="flex flex-wrap justify-center text-center space-x-4 my-2 ">
                {props.filters.map((filter) => (
                    <input key={useId()} type="button" className={`text-md font-medium px-4 py-1 rounded-md cursor-pointer ${props.activeFilter === filter ? " border-b-2 border-red-600 shadow-sm shadow-red-500" : ""}`} value={filter} onClick={chooseFilterHandler}/>
                ))}
        </div>
    );
}

export default Filters;