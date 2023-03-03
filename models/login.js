const mongoose = require('mongoose')
const Schema = mongoose.Schema

const loginSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
  },
  password: {
    type: String,
    required: true,
    // validate: {
    //   validator: function (v) {
    //     return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(v);
    //   },
    //   message: props => `${props.value} is not a valid password!`
    // }
  },
})

module.exports = mongoose.model('Login', loginSchema)