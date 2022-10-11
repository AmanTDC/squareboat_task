const { getRequest } = require("./apiMethods");

async function getMyInfo(){
    try{
        return await getRequest('/getMyInfo','')
    }
    catch(err){
        throw err
    }
}

async function getFollowers(user){
    try{
        return await getRequest('/follower/getFollowers','?user_id='+user.user_id)
    }catch(err){
        throw err
    }
}
async function getFollowing(user){
    try{
        return await getRequest('/follower/getFollowers','?user_id='+user.user_id)
    }catch(err){
        throw err
    }
}
async function getNotFollowing(user){
    try{
        return await getRequest('/follower/getNotFollowing','?user_id='+user.user_id)
    }catch(err){
        throw err
    }
}
async function getFeed(user){
    try{
        return await getRequest('/post/getFeed','?user_id='+user.user_id)
    }catch(err){
        throw err
    }
}

export {
    getMyInfo,
    getFollowers,
    getNotFollowing,
    getFollowing,
    getFeed
}