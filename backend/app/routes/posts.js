const { getFeed } = require('../controllers/postsController')

const router = require('express').Router()

router.get('/getFeed',getFeed)

module.exports = router