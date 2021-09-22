const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default:Date.now()
    }
})

//creating an admin model
const Admin = mongoose.model('Admin',adminSchema)

module.exports = Admin