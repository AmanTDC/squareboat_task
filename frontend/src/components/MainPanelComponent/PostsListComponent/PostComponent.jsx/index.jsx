import React, { useEffect } from 'react';
import PostContentComponent from './PostContentComponent';
import UserTitleComponent from './UserTitleComponent';

export default function PostComponent(props){
    useEffect(()=>{
        
        console.log(props)
    
    })
    return(
        <div className="card mb-3 pb-3">
            <UserTitleComponent name={props.name} username={props.username}/>
            <PostContentComponent post_text={props.post_text}/>
        </div>
    )
}