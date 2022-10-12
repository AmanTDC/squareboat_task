import setFollowers from "../redux/actions/setFollowers";
import setPosts from "../redux/actions/setPosts";
import setUsersFollowing from "../redux/actions/setUsersFollowing";
import setUsersNotFollowing from "../redux/actions/setUsersNotFollowing";

const { getFollowers, getFollowing, getNotFollowing, getFeed } = require("./apiService");

async function reloadFreshStates(dispatch){
    let followers = (await getFollowers()).followers
    let usersFollowing = (await getFollowing()).usersFollowing
    let usersNotFollowing = (await getNotFollowing()).usersNotFollowing
    let posts = (await getFeed()).posts
    
    dispatch(setFollowers(followers))
    dispatch(setUsersFollowing(usersFollowing))
    dispatch(setUsersNotFollowing(usersNotFollowing))
    dispatch(setPosts(posts))

}
export default reloadFreshStates;