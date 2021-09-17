const Users = require('../Models/usersModel')
const utils = require('../Configs/utils')



//function to generate Account Number
const genAccountNumber = (length) => {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
}
  

//Creating a user account
exports.createAccount = async (req, res) => {
//1.get details for the users
    const body = req.body
    const user = { firstName, lastName, email, password, phoneNumber } = body


//2.check if the email and phonenumber exist
    if (await utils.emailExist(email)) {
        res.status(406).json({
            status: 'Not Acceptable',
            message: 'Email already Exist'
        })
    }

    else if (await utils.contactExist(phoneNumber)) {
        res.status(406).json({
            status: 'Not Acceptable',
            message: 'Phone Number already exist'
        })
    }

//3. encrypt password
    else {

        user.password = await utils.encryptPassword(password)

//4. generate 10 degit account Number 
        user.accountNumber = genAccountNumber(10)

        

//5. Save to database
        const accountCreated = await Users.create({ ...user })
        res.status(200).json({
            status: 'Successful',
            message: 'Account Created',
            data: accountCreated
        })

    }

}
