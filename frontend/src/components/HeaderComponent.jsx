import React, { useEffect } from "react";
import { useState } from "react";
import { Redirect } from "react-router";
import { logOutUser } from "../user/authentication/authentication";
// logOutUser
export default function HeaderComponent(props){
    let [redirectToLogin,setRedirectToLogin] = useState(false)
    let [isMobile,setIsMobile] = useState(false)
    useEffect(()=>{
        if(window.innerWidth<window.innerHeight)
            setIsMobile(true)
    },[])
    return (
        <div className={"header-container pt-3 pb-2 text-left "+(isMobile?'mobile ':' ')+("innerWidth-"+window.innerWidth)}>
            <h3 className="header-text d-block pl-5 mb-1 pt-0">Chirp!</h3>
            <button className="btn logout-button" onClick={async ()=>{await logOutUser();setRedirectToLogin(true)}}>
                    Log Out
            </button>
            {
                redirectToLogin&&<Redirect to = "/login"/>
            }
        </div>
    )
}