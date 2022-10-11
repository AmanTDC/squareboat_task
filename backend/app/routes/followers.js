const { getFollowers, getFollowing, getNotFollowing } = require('../controllers/followerController')
const { checkAuthenticated } = require('../services/authentication')

const router = require('express').Router()

router.get('/getFollowers',checkAuthenticated,getFollowers)
router.get('/getFollowing',checkAuthenticated,getFollowing)
router.get('/getNotFollowing',checkAuthenticated,getNotFollowing)

module.exports = router