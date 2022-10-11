import React from "react";

export default function PostContentComponent(props){
    return(
        <div className="d-block border text-left  pl-3">
            {props.post_text}
        </div>
    )
}