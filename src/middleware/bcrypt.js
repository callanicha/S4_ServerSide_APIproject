const bcrypt = require('bcrypt');
const saltRounds = 10
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const userRoutes = require("../routes/users")


app.use(express.json())

exports.hashPassword = (req, res, next) => {
    bcrypt.hash(req.body.password, saltRounds,
        function (err, hash) {
            req.hashPassword = hash
            console.log("your hashed password ", hash)
            next()
        })
}