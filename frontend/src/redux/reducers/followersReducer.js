const initialState = []
export default function followers(state=initialState,action){
    switch(action.type){
        case "SET_FOLLOWERS":
            return action.followers;
        default:
            return state;
    }
}