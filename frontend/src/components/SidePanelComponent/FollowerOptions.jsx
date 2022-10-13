import React from "react";
import { connect } from "react-redux";
import { getFollowers, getFollowing } from "../../services/apiService";
import reloadFreshStates from "../../services/reloadFreshStates";

function FollowerOptions({dispatch,setUsers,setIsFollowing,user,isFollowing,countFollowers,countUsersFollowing}){
    async function handleOnClick(e){
        let type = e.target.name
        if(type=="following"){
            setIsFollowing(true)
            let usersFollowing = (await getFollowing(user)).usersFollowing
            setUsers(usersFollowing)
        }
        else if(type==="followers"){
            setIsFollowing(false)
            let followers = (await getFollowers(user)).followers
            setUsers(followers)
            // console.log(followers)
        }
        // await reloadFreshStates(dispatch)
    }
    return(
        <div className="d-flex p-2">
            <button name="followers" className={"btn w-50 follower-option-button  "+(isFollowing?"":"btn-secondary")} onClick={handleOnClick}>
                Followers({countFollowers})
            </button>
            <button name="following" className={"btn w-50 follower-option-button "+(isFollowing?"btn-secondary":"")} onClick={handleOnClick}>
                Following({countUsersFollowing})
            </button>
        </div>
    )
}
export default connect((state)=>({user:state.user,countFollowers:state.followers.length,countUsersFollowing:state.usersFollowing.length}))(FollowerOptions)