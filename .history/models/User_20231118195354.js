const {model, Scheme} = require('mongoose');

const userScheme = new Scheme({
    username: String,
    password: String,
    email: String,
    createdAt: String
})

module.exports = model('User', userScheme)