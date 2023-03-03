const express = require('express')
const router = express.Router()

// 引入cookieParser
const cookieParser = require('cookie-parser');

//每筆request都會先經過cookieParser處理
router.use(cookieParser());

router.get('/', (req, res) => {
  const loggedIn = req.cookies.loggedIn;
  const firstName = req.cookies.firstName
  if (loggedIn) {
    return res.render('dashboard', { firstName })
  }
  res.redirect('/loginPage')
})

module.exports = router