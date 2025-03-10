import React from "react";
import {Link} from "react-router-dom";
function Logo({className = ""}) {
    return (
        <div className={`${className} `}>
            
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse ">
                <img src="https://res.cloudinary.com/djgmjdn6d/image/upload/v1741345103/bgp0msjdwekvmmi5j9s1.png" className="h-12 rounded-full" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap font-sans">EazyDevDocs</span>
            </Link>
        </div>
    )
}

export default Logo;