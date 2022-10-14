import setFollowers from "../redux/actions/setFollowers";
import setPosts from "../redux/actions/setPosts";
import setUsersFollowing from "../redux/actions/setUsersFollowing";
import setUsersNotFollowing from "../redux/actions/setUsersNotFollowing";

const { getFollowers, getFollowing, getNotFollowing, getFeed } = require("./apiService");


async function reloadFreshStates(dispatch){
    // getFollowers().then(response=>{
    //     dispatch(setFollowers(response.followers))
    // })
    // getFollowing().then(response=>{
    //     dispatch(setFollowers(response.usersFollowing))
    // })
    // getNotFollowing().then(response=>{
    //     dispatch(setUsersFollowing(response.usersNotFollowing))
    // })
    // getFeed().then(response=>{
    //     dispatch(setPosts(response.posts))
    // })
    let [{followers},{usersFollowing},{usersNotFollowing},{posts}] = await Promise.all([
        getFollowers(),
        getFollowing(),
        getNotFollowing(),
        getFeed()
    ])
    // let followers = (await getFollowers()).followers
    // let usersFollowing = (await getFollowers()).usersFollowing
    // let usersNotFollowing = (await getNotFollowing()).usersNotFollowing
    // let posts = (await getNotFollowing()).posts
    // console.log(followers)
    dispatch(setFollowers(followers))
    dispatch(setUsersFollowing(usersFollowing))
    dispatch(setUsersNotFollowing(usersNotFollowing))
    dispatch(setPosts(posts))

}
export default reloadFreshStates;