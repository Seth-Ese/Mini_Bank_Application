const express = require('express')
const midWare = require('../Middlewares/middleware')
const auth = require('../Controllers/userControllers')


const Router = express.Router()

Router.use(express.urlencoded({extended:true}))
Router.use(express.json())

Router.post('/signup',midWare.checkDetails,auth.createAccount)
Router.post('/login',auth.login)





module.exports = Router