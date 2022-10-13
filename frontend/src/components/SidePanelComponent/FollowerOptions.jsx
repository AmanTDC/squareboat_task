import React from "react";
import { connect } from "react-redux";
import { getFollowers, getFollowing } from "../../services/apiService";

function FollowerOptions({setUsers,setIsFollowing,user,isFollowing}){
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
        
    }
    return(
        <div className="d-flex p-2">
            <button name="followers" className={"btn w-50 follower-option-button  "+(isFollowing?"":"btn-secondary")} onClick={handleOnClick}>
                Followers
            </button>
            <button name="following" className={"btn w-50 follower-option-button "+(isFollowing?"btn-secondary":"")} onClick={handleOnClick}>
                Following
            </button>
        </div>
    )
}
export default connect((state)=>({user:state.user}))(FollowerOptions)