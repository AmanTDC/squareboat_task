const { getFeed } = require('../controllers/postsController')
const { checkAuthenticated } = require('../services/authentication')

const router = require('express').Router()

router.get('/getFeed',checkAuthenticated,getFeed)

module.exports = router