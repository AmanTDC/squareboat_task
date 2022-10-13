import React  from "react";
// import HeaderComponent from "./HeaderComponent";
import PostingBoxComponent from "./PostingBoxComponent";
import PostListComponent from "./PostsListComponent";
import './mainPanel.css'

export default function MainPanelComponent(props){
    return(
        <div className={" p-1   main-panel "+(props.usingMobile?"mobile":'')}>
            {/* <HeaderComponent/> */}
            <PostingBoxComponent/>
            <PostListComponent/>
        </div>
    )
}