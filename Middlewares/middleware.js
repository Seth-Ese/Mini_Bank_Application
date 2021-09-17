
exports.checkDetails = async (req,res,next)=>{
    const body = req.body
    if(!body.firstName||!body.lastName||!body.email||!body.phoneNumber||!body.password){
        res.status(400).json({
            status:'Bad Request',
            message:'Please enter the rquired details'
        })
    }
    next()
}