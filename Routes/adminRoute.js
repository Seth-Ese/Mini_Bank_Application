const express = require('express')
const midWare = require('../Middlewares/middleware')
const auth = require('../Controllers/adminController')


const Router = express.Router()

Router.use(express.urlencoded({ extended: true }))
Router.use(express.json())

Router.post('/signup',midWare.checkDetails,auth.adminSignup)
Router.post('/login',auth.adminLogin)



module.exports = Router