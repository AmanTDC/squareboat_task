const LocalStrategy = require('passport-local').Strategy
const {UserRepository} = require('../app/repositories/UserRepository')
const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy

async function authenticateUser(username, password, done){
    // console.log("CAlling Authenticate User FunctionS")
    const user = await (new UserRepository().getUser({username,password}))
    if(!user){
        return done(null,false,{message:"No Such User"})
    }
    try{
        if (password==user.password_hashed){
            console.log("Password Matched")
        }
        else{
            return done(null,false,{message:"Password Incorrect"})
        }
    }catch(err){
        return done(err)
    }


    console.log("Verify Function CAlled")
    return done(null,{username,user_id:user.id})

}

function checkAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.json({message:"Please Login!"})
}
console.log("In passpoort-confg")
passport.use(new LocalStrategy( authenticateUser ))
passport.serializeUser((user,done)=>{console.log("serialize");done(null,user)})
passport.deserializeUser((user,done)=>{
    console.log("deserialize")
    done(null,user)
    // done(null, await (new UserRepository().getUser({user_id:id})))
})



module.exports = {
    passport
}