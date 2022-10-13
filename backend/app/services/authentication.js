const { User } = require('../models/User')
const { UserRepository } = require('../repositories/UserRepository')
const { validateInput } = require('./validation')
const sjcl = require('sjcl')
function checkAuthenticated(req,res,next){
    // console.log(req.user)
    // console.log(req.cookies)
    if(req.isAuthenticated()){
        next()
        return
    }
    res.status(401)
    res.json({
        errorCode:401,
        errorMessage:"User need to login",
    })
}

async function registerUser(req,res){
    
    try{
        let userDet = req?.body?.user
        if(!userDet){
            throw new Error("Message : User Not Defined")
        }
        let isValidInput = validateInput({
            username:userDet.username,
            email:userDet.email,
            name:userDet.name,
            password:userDet.password
        })
        if(!isValidInput){
            res.status(400);
            res.send("Invalid User Data")
        }
        let passwordBitArray = sjcl.hash.sha256.hash(userDet.password)
        let passwordHashed = sjcl.codec.hex.fromBits(passwordBitArray)
        let user = await new User(null,userDet.username,userDet.email,userDet.name,passwordHashed)
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
        //console.log(err)
        //console.log("Error Encountered while registering")
        // console.log(err)
        
    }
}



module.exports =  {
    checkAuthenticated,registerUser
}