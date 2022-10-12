const initialState = []
export default function usersFollowing(state=initialState,action){
    switch(action.type){
        case "SET_USERS_FOLLOWING":
            return action.usersFollowing;
        default:
            return state;
    }
}