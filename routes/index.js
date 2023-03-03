const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const login = require('./modules/login')
const loginPage = require('./modules/loginPage')
const dashboard = require('./modules/dashboard')

router.use('/', home)
router.use('/login', login)
router.use('/loginPage', loginPage)
router.use('/dashboard', dashboard)

module.exports = router