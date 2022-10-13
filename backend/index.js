var express = require('express')
var http = require('http');
var cors = require('cors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const path = require('path');
const {UI_URL,BACKEND_URL} = require('./config/const')
const dotenv = require('dotenv')
const session = require('express-session')
const flash = require('express-flash')
const {passport} = require('./config/passport-config')
// const cors = require(cors)
// const { UserRepository } = require('./app/repositories/UserRepository');
// initializePassport(
//     passport,
//     email => UserRepository.find(user=>user.email === email)
// )

dotenv.config()

let app = express()

app.use(express.urlencoded({extended:false}))
app.use(flash())

let corsOptions = {
    origin: process.env.UI_URL,
    credentials:true,
    optionsSuccessStatus: 200 
}
app.use(cors(corsOptions))

app.use(session({secret:"e4gtfawukedjfbv23652kjh34g23g4h",
    resave:false,
    saveUninitialized:false
    // expires: new Date(Date.now() + (30 * 86400 * 1000))
})
)



app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded())
app.use(express.json())
app.use(cors(corsOptions))
app.use(logger('dev'))
app.use(cookieParser())
app.use(express.static('public'))
server = http.createServer(app).listen(8000,(req,res)=>{
    console.log("Server Running Successfully on port 8000")
});
// app.use()
module.exports = {
    app , server
}