import setFollowers from "../redux/actions/setFollowers";
import setPosts from "../redux/actions/setPosts";
import setUsersFollowing from "../redux/actions/setUsersFollowing";
import setUsersNotFollowing from "../redux/actions/setUsersNotFollowing";

const { getFollowers, getFollowing, getNotFollowing, getFeed } = require("./apiService");


async function reloadFreshStates(dispatch){
    
    let [{followers},{usersFollowing},{usersNotFollowing},{posts}] = await Promise.all([
        getFollowers(),
        getFollowing(),
        getNotFollowing(),
        getFeed()
    ])
    
    dispatch(setFollowers(followers))
    dispatch(setUsersFollowing(usersFollowing))
    dispatch(setUsersNotFollowing(usersNotFollowing))
    dispatch(setPosts(posts))

}
export default reloadFreshStates;