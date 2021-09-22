const Admin = require('../Models/adminModel')
const utils = require('../Configs/utils')

//Admin sign up

exports.adminSignup = async (req,res)=>{
//get admin details
    const body = req.body
    const admin = {firstName,lastName,phoneNumber,email,password} = body
//1.checking if email exist
    if(await utils.existingEmail(email)) {
        res.status(406).json({
            status: 'Not Acceptable',
            message: 'Email already Exist'
        })
    }
//2.check if phone Number exist
    else if(await utils.existingContact(phoneNumber)){
        res.status(406).json({
            status: 'Not Acceptable',
            message: 'Contact already Exist'
        })
    } else{
//3.encrypt the password
        admin.password = await utils.encryptPassword(password)

//4. save to database
        const adminCreated = await Admin.create({...admin})

        res.status(200).json({
            status:'Succesful',
            message:'Successfully Signed Up',
            data:adminCreated
        })
    }
    
}

//Admin Login
exports.adminLogin = async(req,res)=>{
    
    let userfound
    const {email,phoneNumber,password} = req.body
//1.admin should login with email or phoneNumber with password
    if(email && password){
        
        try {
            userfound = await Admin.findOne({email})
        } catch (error) {
            console.log(error)
        }
    }
    else if(phoneNumber && password){
        try {
            userfound = await Admin.findOne({phoneNumber})
        } catch (error) {
            console.log(error)
        }
    }
    else{
        res.status(400).json({
            status: 'Failed',
            message: 'Please login'
        })
    }
// verification of password
if(userfound){
    try {
        const hashedPassword = userfound.password
    if (await utils.passwordVerification(password,hashedPassword)) {
//generate the token
        const token = await utils.gentoken(userfound._id)
        res.status(200).json({
            userfound,
            token,
            message: 'Login Successfully'
        })
    }
    else{
        res.status(400).json({
            status: 'failed',
            message: 'Incorect Password'
        })
    }
    } catch (error) {
        console.log(error)
    }
}
}