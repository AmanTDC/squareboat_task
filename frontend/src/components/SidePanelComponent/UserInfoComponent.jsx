import React from "react";
export default function UserInfoComponent(props){
    console.log(props)
    return(
        <div className="d-block border border-secondary text-left">
            <h7 className="ml-3">{props.name}
                <small className="ml-3">
                    @{props.username}
                </small>
            </h7>
            {
                !props.isFollowing&&<button className="btn btn-primary">
                Follow
            </button>
            }
            
        </div>
    )
}