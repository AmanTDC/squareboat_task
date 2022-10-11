import React from "react";

export default function UserTitleComponent(props){
    return(
        <div className="d-flex ml-3 mt-3">
            <h4>
                {props.name}
            </h4>
            <h6 className="ml-3 mt-2 text-muted">
                @{props.username}
            </h6>
        </div>
    )
}