const { getFollowers, getFollowing, getNotFollowing, addFollower } = require('../controllers/followerController')
const { checkAuthenticated } = require('../services/authentication')
const { route } = require('./users')

const router = require('express').Router()

router.get('/getFollowers',checkAuthenticated,getFollowers)
router.get('/getFollowing',checkAuthenticated,getFollowing)
router.get('/getNotFollowing',checkAuthenticated,getNotFollowing)
router.post('/addFollower',checkAuthenticated,addFollower)

module.exports = router