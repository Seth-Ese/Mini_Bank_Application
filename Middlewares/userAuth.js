const JWT = require('jsonwebtoken')
const Users = require('../Models/usersModel')

const userAuth = async (req,res,next)=>{
    let token = req.headers.authorization;

    try {
        const userAuthentification = JWT.verify(token, process.env.SECRET)
        let user = await Users.findById(userAuthentification)
        req.user = user
    } catch (error) {
        console.log(error)
        res.status(406).json({
            status:'Failed',
            message:'Please login'
        })
    }
        next()
}

module.exports = userAuth