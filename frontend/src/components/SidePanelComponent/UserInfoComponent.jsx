import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addFollower } from "../../services/apiService";
import reloadFreshStates from "../../services/reloadFreshStates";
function UserInfoComponent(props){
    // console.log(props)
    let [isFollowing,setIsFollowing] = useState(false)
    console.log(props.isFollowing)
    async function handleFollowClick(e){
        try{
            await addFollower({
                user_id:props.user_id
            })
            setIsFollowing(true)
            await reloadFreshStates(props.dispatch)
            // might be needed to change
            // props.setUsers([])
        }
        catch(err){
            throw err
        }
    }
    useEffect(()=>{

    },[setIsFollowing])
    return(
        <div className="d-block card m-2 mt-1  p-3 text-left">
            <h7 className="ml-3">{props.name}
                <small className="ml-3">
                    @{props.username}
                </small>
            </h7>
            {   
                (!props.isFollowing&&!isFollowing)&&<button className="btn btn-primary" onClick={handleFollowClick}>
                Follow
            </button>
            }
            
        </div>
    )
}

export default connect()(UserInfoComponent)