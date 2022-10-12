const {app} = require('../../index')
const {passport} = require('../../config/passport-config')
const {UI_URL} = require('../../config/const')
const path = require('path')
const bcrypt = require('bcrypt')
const { User } = require('../models/User')
const parser = require('body-parser')
const { registerUser, checkAuthenticated } = require('../services/authentication')
const urlencodedParser = parser.urlencoded({extended : false});
const usersRouter = require('./users')
const postRouter = require('./posts')
const followersRouter = require('./followers')
const { nextTick } = require('process')
app.post('/register', registerUser)
app.post('/login', passport.authenticate('local',{failureMessage:"Invalid Credentials"}), (req,res)=>{
    res.json("Successfull Auth")
})
app.get('/getMyInfo',checkAuthenticated,(req,res)=>{
    res.json({user:req.user});
})

app.delete('/logout',(req,res)=>{
    
    // console.log(Object.keys(req.cookies))
    // res.clearCookie('token')
    // res.status(200);
    // res.send()
    req.session.destroy((err)=>{
        res.status(200);
        res.json({
            message:"Logout Successfull"
        })
    })
    
    })

app.use('/user',usersRouter);
app.use('/post',postRouter);
app.use('/follower',followersRouter);

module.exports = {
    app
}
