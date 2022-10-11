import React  from "react";
import HeaderComponent from "./HeaderComponent";
import PostingBoxComponent from "./PostingBoxComponent";
import PostListComponent from "./PostsListComponent";

export default function MainPanelComponent(props){
    return(
        <nav className="navbar navbar-default navbar-fixed-top border p-1 w-75 border-primary main-panel-component">
            <HeaderComponent/>
            <PostingBoxComponent/>
            <PostListComponent/>
        </nav>
    )
}