const { UserRepository } = require('../repositories/UserRepository')
function checkAuthenticated(req,res,next){
    console.log(req.user)
    console.log(req.cookies)
    if(req.isAuthenticated()){
        next()
        return
    }
    res.status(401)
    res.json({
        errorCode:401,
        errorMessage:"User need to login",
        //to Change
        redirect:"http://localhost:3000/login"
    })
}

async function registerUser(req,res){
    try{
        //to change
        console.log(req.body)
        let userDet = req?.body?.user
        if(!userDet){
            throw new Error("Message : User Not Defined")
        }
        let user = await new User(null,userDet.username,userDet.email,userDet.name,userDet.password)
        // console.log(typeof new UserRepository().createUser)
        await (new UserRepository().createUser(user))
        
        res.json({message:"Successfull Registration"})

    } catch(err){
        if(err.errno==1062){
            res.status(409,"Duplicate Record")
            res.json({
                ErrorCode : 409,
                ErrorMessage: "Duplicate Username or email address"
            })
        }
        else
            res.json(err)
        console.log(err)
        console.log("Error Encountered while registering")
        // console.log(err)
        
    }
}



module.exports =  {
    checkAuthenticated,registerUser
}