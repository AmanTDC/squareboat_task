import { combineReducers } from "redux";
import user from "./userReducer";
export default function createRootReducer(){
    return combineReducers({
        user
    })
}