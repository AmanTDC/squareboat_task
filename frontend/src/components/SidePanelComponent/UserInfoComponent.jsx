import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addFollower } from "../../services/apiService";
import reloadFreshStates from "../../services/reloadFreshStates";
function UserInfoComponent(props){
    // console.log(props)
    let [isFollowing,setIsFollowing] = useState(false)
    //console.log(props.isFollowing)
    async function handleFollowClick(e){
        setIsFollowing(true)
        await addFollower({
            user_id:props.user_id
        })
        
        reloadFreshStates(props.dispatch)
    
        
    }
    useEffect(()=>{

    },[setIsFollowing])
    return(
        <div className="d-flex m-2 mt-1  p-2 text-left user-tile">
            <h7 className="d-block ml-3 user-tile-name">{props.name}
                    {/* @{props.username} */}
                
            </h7>
            {   
                (!props.isFollowing&&!isFollowing)&&<i class="d-block fa-solid fa-plus follow-icon text-secondary pr-2" onClick={handleFollowClick}></i>
            // <button className="btn btn-primary" >
            //     Follow
            // </button>
            }
            
        </div>
    )
}

export default connect()(UserInfoComponent)