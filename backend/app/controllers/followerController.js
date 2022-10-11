const { FollowerRepository } = require("../repositories/FollowerRepository");

const followerRepository = new FollowerRepository();

async function getFollowers(req,res){
    try{
        let user = {
            user_id : req.query.user_id
        }
        let followers = await followerRepository.getFollowers(user);
        res.json({
            followers
        })
    }catch(err){
        res.status(400);
        console.log(err)
        res.json({error:true,errorMessage:"Unexpected Error Occurred"})
    }
    
    
}
async function getFollowing(req,res){
    try{
        let user = {
            user_id : req.query.user_id
        }
        let usersFollowing =  await followerRepository.getFollowing(user);
        res.json({
            usersFollowing
        })
    }catch(err){
        res.status(400);
        console.log(err)
        res.json({error:true,errorMessage:"Unexpected Error Occurred"})
    }

}
async function getNotFollowing(req,res){
    try{
        let user = {
            user_id : req.query.user_id
        }
        let usersNotFollowing =  await followerRepository.getNotFollowing(user);
        res.json({
            usersNotFollowing
        })
    }catch(err){
        res.status(400);
        console.log(err)
        res.json({error:true,errorMessage:"Unexpected Error Occurred"})
    }
    
    
}

module.exports = {
    getFollowers,getFollowing,getNotFollowing
}