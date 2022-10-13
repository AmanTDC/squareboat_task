import React from "react";

export default function UserTitleComponent(props){
    return(
        <div className="d-flex user-post-title ml-3 pt-2">
            <h4 className="d-block">
                {props.name}
            </h4>
            <h6 className="d-block ml-3 mt-2 text-muted">
                @{props.username}
            </h6>
        </div>
    )
}