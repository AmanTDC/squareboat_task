import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getFeed } from "../../../services/apiService.js";
import PostComponent from "./PostComponent.jsx";
import PostContentComponent from "./PostComponent.jsx/PostContentComponent.jsx";
function PostListComponent(props){
    
    useEffect(()=>{
        
    },[])
    return(
        <div className="card w-100 m-3 p-3">
            {
                props.posts.map(post=>{
                    return <PostComponent 
                                key = {post.post_id}
                                name = {post.name}
                                username = {post.username}
                                post_text = {post.post_text}
                            />
                })
            }
        </div>
    )
}
function mapStateToProps(state){
    return{
        user:state.user,
        posts:state.posts
    }
}
export default connect(mapStateToProps)(PostListComponent)