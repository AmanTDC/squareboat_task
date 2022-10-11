const { getUserInfo } = require('../controllers/userController')

const router = require('express').Router()

router.get('/getUserInfo',getUserInfo)

module.exports = router