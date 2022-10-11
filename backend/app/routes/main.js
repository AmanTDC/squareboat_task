const {app} = require('../../index')
const {passport} = require('../../config/passport-config')
const {UI_URL} = require('../../config/const')
const path = require('path')
const bcrypt = require('bcrypt')
const { User } = require('../models/User')
const parser = require('body-parser')
const { registerUser } = require('../services/authentication')
const urlencodedParser = parser.urlencoded({extended : false});
const usersRouter = require('./users')
const postRouter = require('./posts')
const followersRouter = require('./followers')
app.post('/register', registerUser)
app.post('/login', passport.authenticate('local',{failureMessage:"Invalid Credentials"}), (req,res)=>{
    res.json("Successfull Auth")
})

app.delete('/logout',(req,res)=>{
    req.logOut();
    res.json("Succesfully Logged Out")
})

app.use('/user',usersRouter);
app.use('/post',postRouter);
app.use('/follower',followersRouter);

module.exports = {
    app
}
