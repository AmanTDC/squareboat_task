import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getFollowers } from '../../services/apiService';
import { logOutUser } from '../../user/authentication/authentication';
import FollowerOptions from './FollowerOptions';
import UserInfoListComponent from './UserInfoList';
import UsersToFollowComponent from './UsersToFollowComponent';
function SidePanelComponent(props){
    let [users,setUsers] = useState([
    ])
    let [toFollowUsers,setToFollowUsers] = useState([])
    let [redirectToLogin,setRedirectToLogin] = useState(false)
    let [isFollowing,setIsFollowing] = useState(false)
    useEffect(()=>{
        
    },[setUsers,setToFollowUsers])
    return(
        <div className="card m-3 w-25 ">
            <div className="follow-relation-panel">
                <button className="btn btn-danger" onClick={async ()=>{await logOutUser();setRedirectToLogin(true)}}>
                    Log Out
                </button>
                {
                    redirectToLogin&&<Redirect to = "/login"/>
                }
                <FollowerOptions isFollowing={isFollowing} setIsFollowing={setIsFollowing} setUsers={setUsers}/>
                {/* <UserInfoListComponent users = {users} isFollowing={isFollowing} setUsers={setUsers}/> */}
                {   !isFollowing?
                    <UserInfoListComponent users = {props.followers} isFollowing={false} setUsers={setUsers}/>:
                    <UserInfoListComponent users = {props.usersFollowing} isFollowing={true} setUsers={setUsers}/>
                }
            </div>
            <UsersToFollowComponent users={props.usersNotFollowing} setUsers={setToFollowUsers}/>
        </div>
    )
}
export default connect((state)=>({user:state.user,followers:state.followers,usersFollowing:state.usersFollowing,usersNotFollowing:state.usersNotFollowing}))(SidePanelComponent)