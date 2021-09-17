const express = require('express')
require('dotenv').config()
const app = express()
const dbConnect = require('./Configs/db');
const userRoute = require('./Routes/userRoute')
app.use(express.urlencoded({extended:true}))


dbConnect()

app.use('/api/users',userRoute)


const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server running at.... ${PORT}`)
})