const { PostRepository } = require("../repositories/PostRepository");

const postRepository = new PostRepository();

async function getFeed(req,res){
    try{
        let user = req.user
        console.log("User:",user)
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
async function createPost(req,res){
    try{
        let user = req.user
        let post = req.body.post
        // console.log(user,post)
        await postRepository.createPost(user,post)
        res.status(201)
        res.json({
            message:"Posted Successfully"
        })
    }catch(err){
        res.status(400);
        console.log(err)
        res.json({error:true,errorMessage:"Unexpected Error Occurred"})
    }
}

module.exports = {
    getFeed,
    createPost
}