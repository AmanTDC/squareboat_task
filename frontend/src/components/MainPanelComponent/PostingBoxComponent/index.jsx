import React, { useState } from "react";
import './postingBoxStyle.css'
// import { connect } from "../../../../../backend/app/routes/users";
// import { User } from "../../../../../backend/app/models/User";
import {connect} from 'react-redux'
import { createPost } from "../../../services/apiService";
import reloadFreshStates from "../../../services/reloadFreshStates";
function PostingBoxComponent(props){
    let [postText,setPostText] = useState('')
    function handleOnChange(e){
        let text = e.target.value
        setPostText(text)
    }
    async function handleOnClick(e){
        e.preventDefault()
        try{
            await createPost({post_text:postText})
            alert("Posted Successfully")
            reloadFreshStates(props.dispatch)
            setPostText('')
        }catch(err){
            alert("Couldn't Post Successfully")
            setPostText('')
        }
        
    }
    return(
        <div className="p-3 mt-3 w-100 card text-left posting-box">
            <h4 className="m-1">
                {props.user.name}
                <small className="text-secondary m-2">
                    @{props.user.username}
                </small>
            </h4>
            
            <form>
                <textarea className="form-control m-1" placeholder = "Write Something..."onChange={handleOnChange} value={postText}/>
                <button className="btn btn-primary m-1" onClick={handleOnClick}>
                    Post
                </button>
            </form>
        </div>
    )
}

function mapStateToProps(state){
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(PostingBoxComponent)