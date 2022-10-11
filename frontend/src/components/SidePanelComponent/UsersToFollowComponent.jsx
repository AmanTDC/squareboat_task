import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getNotFollowing } from "../../services/apiService";
import UserInfoListComponent from "./UserInfoList";

function UsersToFollowComponent(props){
    let [users,setUsers] = useState([
    ])
    useEffect(()=>{
        getNotFollowing(props.user).then(users_=>{
            setUsers(users_.usersNotFollowing)
        }).catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <div>
            <h4>
                Other Users To Follow 
            </h4>
            <UserInfoListComponent users = {users} isFollowing={true}/>
        </div>
    )
}
function mapStateToProps(state){
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(UsersToFollowComponent)