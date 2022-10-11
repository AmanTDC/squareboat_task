const { UserRepository } = require("../repositories/UserRepository");

const userRepository = new UserRepository();

async function getUserInfo(req,res){
    try{

        let user = {
            user_id : req.query.user_id
        }
        
        let userInfo =  await userRepository.getUserInfo(user)
        res.json({
            userInfo
        })
    }catch(err){
        res.status(400);
        console.log(err)
        res.json({error:true,errorMessage:"Unexpected Error Occurred"})
    }
}

module.exports = {
    getUserInfo
}