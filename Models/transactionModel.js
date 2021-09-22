const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
    withdraw:{
        type:String,
        required:true
    },
    deposit:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    accountBalance: {
        type: String,
        required: false,
        default: 0
    },
    create_date: {
        type: Date,
        default: Date.now()
    }
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },

    }
)
// creating a transaction model
const transaction = mongoose.model('Users',transactionSchema)

module.exports = transaction 