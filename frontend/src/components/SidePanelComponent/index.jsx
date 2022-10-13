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
        <div className={" side-panel  "+(props.usingMobile?"mobile":'')}>
            <div className="m-3 follow-relation-panel  pt-3 pl-1 pr-1 card">
                
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