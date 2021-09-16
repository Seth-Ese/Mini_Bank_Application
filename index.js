const express = require('express')
require('dotenv').config()
const app = express()
const dbConnect = require('./Configs/db');

app.use(express.urlencoded({extended:true}))


dbConnect()

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server running at.... ${PORT}`)
})