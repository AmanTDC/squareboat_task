let initialState = {}
export default function user(state=initialState,action){
    switch(action.type){
        case "SET_USER":
            return action.user
        default:
            return state
    }
    return state
}