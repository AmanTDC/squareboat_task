import React, { useEffect } from 'react';
import PostContentComponent from './PostContentComponent';
import UserTitleComponent from './UserTitleComponent';

export default function PostComponent(props){
    useEffect(()=>{
        
        //console.log(props)
    
    })
    return(
        <div className="post  mb-6 pb-9 pt-4 pl-3 pr-3 pb-5">
            <UserTitleComponent name={props.name} username={props.username}/>
            <PostContentComponent post_text={props.post_text}/>
        </div>
    )
}