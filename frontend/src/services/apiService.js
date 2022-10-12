const { getRequest, postRequest } = require("./apiMethods");

async function getMyInfo(){
    try{
        return await getRequest('/getMyInfo','')
    }
    catch(err){
        throw err
    }
}

async function getFollowers(){
    // console.log(user)
    try{
        return await getRequest('/follower/getFollowers','')
    }catch(err){
        throw err
    }
}
async function getFollowing(){
    try{
        return await getRequest('/follower/getFollowing','')
    }catch(err){
        throw err
    }
}
async function getNotFollowing(){
    try{
        return await getRequest('/follower/getNotFollowing','')
    }catch(err){
        throw err
    }
}
async function getFeed(){
    try{
        return await getRequest('/post/getFeed','')
    }catch(err){
        throw err
    }
}
async function createPost(post){
    try{
        console.log(post)
        return await postRequest('/post/createPost',{
            post
        })
    }catch(err){
        throw err
    }
}
async function addFollower(toFollowUser){
    try{
        return await postRequest('/follower/addFollower',{
            toFollowUser
        })
    }catch(err){
        throw err
    }
}
export {
    getMyInfo,
    getFollowers,
    getNotFollowing,
    getFollowing,
    getFeed,
    createPost,
    addFollower
}