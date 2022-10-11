const { getFollowers, getFollowing, getNotFollowing } = require('../controllers/followerController')

const router = require('express').Router()

router.get('/getFollowers',getFollowers)
router.get('/getFollowing',getFollowing)
router.get('/getNotFollowing',getNotFollowing)

module.exports = router