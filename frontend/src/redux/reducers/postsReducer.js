const initialState = []
export default function posts(state=initialState,action){
    switch(action.type){
        case "SET_POSTS":
            return action.posts;
        default:
            return state;
    }
}