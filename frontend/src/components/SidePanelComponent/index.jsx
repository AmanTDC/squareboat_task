import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { logOutUser } from '../../user/authentication/authentication';
import FollowerOptions from './FollowerOptions';
import UserInfoListComponent from './UserInfoList';
import UsersToFollowComponent from './UsersToFollowComponent';
export default function SidePanelComponent(props){
    let [users,setUsers] = useState([
        {
            "user_id": 43,
            "username": "undefined",
            "name": "asddf"
        },
        {
            "user_id": 45,
            "username": "UU",
            "name": "NN"
        },
        {
            "user_id": 48,
            "username": "Aman Gupta",
            "name": "AMAN GUPTA"
        }
    ])
    let [redirectToLogin,setRedirectToLogin] = useState(false)
    let [isFollowing,setIsFollowing] = useState(false)
    return(
        <div className="card m-3 w-25">
            <div className="follow-relation-panel">
                <button className="btn btn-danger" onClick={async ()=>{await logOutUser();setRedirectToLogin(true)}}>
                    Log Out
                </button>
                {
                    redirectToLogin&&<Redirect to = "/login"/>
                }
                <FollowerOptions/>
                <UserInfoListComponent users = {users} isFollowing={isFollowing}/>
            </div>
            <UsersToFollowComponent/>
        </div>
    )
}