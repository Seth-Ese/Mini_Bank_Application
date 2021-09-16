const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        unique:true
    },
    lastName: {
        type: String,
        required: true,
        unique: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default:Date.now()
    }
})
// creating the user Model

const users = mongoose.model('Users',userSchema)

module.exports = users