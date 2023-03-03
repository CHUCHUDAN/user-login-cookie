const express = require('express')
const router = express.Router()

// 引入Login
const Login = require('../../models/login')

// check email password

function check(res, email, password) {
  Login.find()
    .lean()
    .then(login => {
      let checkItem = login.find(item => email === item.email && password === item.password)
      if (checkItem !== undefined) {
        const firstName = checkItem.firstName
        //以下是要儲存的cookie
        res.cookie('loggedIn', true, { maxAge: 900000, httpOnly: true });
        res.cookie('firstName', firstName, { maxAge: 900000, httpOnly: true })
        return res.render('dashboard', { firstName })
      }
      res.send('<h1 style="color: red; position:relative; left:20px;">帳密錯誤<h1>')
    })
    .catch(error => console.error(error))
}

router.post('/', (req, res) => {
  const email = req.body.email.trim()
  const password = req.body.password.trim()
  if (!email || !password) return
  check(res, email, password)
})

module.exports = router