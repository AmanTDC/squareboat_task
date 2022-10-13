import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getNotFollowing } from "../../services/apiService";
import UserInfoListComponent from "./UserInfoList";

function UsersToFollowComponent(props){
    
    useEffect(()=>{
        
    },[])
    return(
        <div className=" card pt-3 pl-1 pr-1 m-3">
            <h4 className="more-profiles-heading">
                More Profiles 
            </h4>
            <UserInfoListComponent users = {props.users} isFollowing={false} setUsers={props.setUsers}/>
        </div>
    )
}
function mapStateToProps(state){
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(UsersToFollowComponent)