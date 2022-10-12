const initialState = []
export default function usersNotFollowing(state=initialState,action){
    switch(action.type){
        case "SET_USERS_NOT_FOLLOWING":
            return action.usersNotFollowing;
        default:
            return state;
    }
}