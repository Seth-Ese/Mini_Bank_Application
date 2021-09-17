const bcrypt = require('bcrypt')
const Users = require('../Models/usersModel')
const JWT = require('jsonwebtoken')


//checking if email exist

exports.emailExist = async()=>{
    const foundEmail = await Users.findOne({email})
    if(foundEmail){
        return true
    }
    else return false
}

//checking if phonenumber exist

exports.contactExist = async()=>{
    const foundContact = await Users.findOne({phoneNumber})
    if(foundContact){
        return true
    }
    else return false
}



//function for encryption of password
exports.encryptPassword = async (password)=>{
    return passwordHashed = await bcrypt.hash(password,12)
}

