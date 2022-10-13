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
        <div className="card  m-3">
            <h3 className="post-list-heading ">
                Feed
            </h3>
            {   props.posts.length==0?<h4 className="p-2 no-post-display">Nothing to show right now. Follow more users to view their status updates!</h4>:
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