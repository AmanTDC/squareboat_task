import { combineReducers } from "redux";
import user from "./userReducer";
import posts from "./postsReducer";
import followers from "./followersReducer";
import usersFollowing from "./usersFollowingReducer";
import usersNotFollowing from "./usersNotFollowingReducer";
export default function createRootReducer(){
    return combineReducers({
        user,
        posts,
        followers,
        usersFollowing,
        usersNotFollowing
    })
}