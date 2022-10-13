import React from "react";

export default function PostContentComponent(props){
    return(
        <div className="card post-content d-block  text-left ml-4 mt-2 mr-3 p-3  pl-3">
            <pre className="post-content-view">{props.post_text}</pre>
        </div>
    )
}