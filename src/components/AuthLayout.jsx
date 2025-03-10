import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Commet } from "react-loading-indicators";


export default function AuthLayout({children, authentication = true}){

    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.auth.status)
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if(authentication && isAuthenticated !== authentication){
            toast.error("You are not authenticated. Please login first.");
            navigate("/login");
        }else if(!authentication && isAuthenticated !== authentication){
            navigate("/");
        }
        setLoader(false);
    }, [isAuthenticated, navigate, authentication]);

    return loader ? <Commet color="#ff3030" size="small" text="" textColor="" /> : <>{children}</>
}