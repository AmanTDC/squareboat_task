const { PostRepository } = require("../repositories/PostRepository");

const postRepository = new PostRepository();

async function getFeed(req,res){
    try{
        let user = {
        user_id : req.query.user_id
        }
        let posts =  await postRepository.getFeed(user)
        res.json({
            posts
        })

    } catch(err){
        res.status(400);
        console.log(err)
        res.json({error:true,errorMessage:"Unexpected Error Occurred"})
    }
}

module.exports = {
    getFeed
}