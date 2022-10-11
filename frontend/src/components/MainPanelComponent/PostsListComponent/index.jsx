import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getFeed } from "../../../services/apiService.js";
import PostComponent from "./PostComponent.jsx";
import PostContentComponent from "./PostComponent.jsx/PostContentComponent.jsx";
function PostListComponent(props){
    const [posts,setPosts] = useState([
    ])
    let tempPosts = []
    async function configureInitialState(){
        
        let posts_ = await getFeed(props.user)
        setPosts(posts_.posts)
    }
    // configureInitialState()
    // configureInitialState()
    useEffect(()=>{
        // setPosts(tempPosts)
        // configureInitialState()
        // setPosts([{name:"as"}])
        getFeed(props.user).then(data=>{
            console.log(data)
            setPosts(data.posts)
        }).catch(err=>
            console.log(err)
        )
    },[])
    return(
        <div className="card w-100 m-3 p-3">
            {
                posts.map(post=>{
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
        user:state.user
    }
}
export default connect(mapStateToProps)(PostListComponent)