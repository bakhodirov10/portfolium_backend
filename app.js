const mongoose = require("mongoose")
require("dotenv").config()
const connectDB = require("./config/db")
const express = require("express")
const cors = require("cors")


const port = process.env.PORT || 3344

const app = express()
app.use(cors())

app.use(express.json())

connectDB()



app.listen(port, ()=>{
    console.log(`Server is listen on ${port}`)
})