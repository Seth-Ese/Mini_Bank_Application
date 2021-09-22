const jwt = require('jsonwebtoken')
const Admin = require('../Models/adminModel')

const adminAuth = async(req,res,next)=>{
    let token = req.headers.authorization;
    try {
        const adminAuthentification = jwt.verify(token, process.env.SECRET)
        let admin = await Admin.findById(adminAuthentification)
        req.admin = admin
    } catch (error) {
        console.log(error)
        res.status(406).json({
            status:'failed',
            message:'Not Authorized by Admin'
        })
    }
        next();
}

module.exports = adminAuth