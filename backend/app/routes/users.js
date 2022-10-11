const { getUserInfo } = require('../controllers/userController')
const { checkAuthenticated } = require('../services/authentication')

const router = require('express').Router()

router.get('/getUserInfo',checkAuthenticated,getUserInfo)

module.exports = router