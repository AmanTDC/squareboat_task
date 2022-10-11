import React from "react";

export default function FollowerOptions(props){
    return(
        <div className="d-flex">
            <button className="btn pl-4 pr-4 ">
                Followers
            </button>
            <button className="btn ml-4 pl-4 pr-4 ">
                Following
            </button>
        </div>
    )
}