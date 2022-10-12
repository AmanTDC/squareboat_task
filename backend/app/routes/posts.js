const { getFeed, createPost } = require('../controllers/postsController')
const { checkAuthenticated } = require('../services/authentication')

const router = require('express').Router()

router.get('/getFeed',checkAuthenticated,getFeed)
router.post('/createPost',checkAuthenticated,createPost)

module.exports = router