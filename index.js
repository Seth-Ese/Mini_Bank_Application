const express = require('express')
require('dotenv').config()
const app = express()
const dbConnect = require('./Configs/db');
const userRoute = require('./Routes/userRoute')
const adminRoute = require('./Routes/adminRoute')
app.use(express.urlencoded({extended:true}))


dbConnect()

app.use('/api/users',userRoute)
app.use('/api/admin',adminRoute)


const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server running at.... ${PORT}`)
})