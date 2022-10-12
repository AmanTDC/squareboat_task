import React from "react";
import UserInfoComponent from "./UserInfoComponent";

export default function UserInfoListComponent(props){
    return(
        <div>
            {
                props.users.map(user=>{
                    return <UserInfoComponent
                            key = {user.user_id}
                            username = {user.username}
                            name = {user.name}
                            isFollowing = {user.isFollowing||props.isFollowing}
                            user_id = {user.user_id}
                            setUsers = {props.setUsers}
                        />
                })
            }
        </div>
    )
}