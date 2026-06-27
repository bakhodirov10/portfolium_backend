const mongoose = require("mongoose")
require("dotenv").config()
const connectDB = require("./config/db")
const express = require("express")
const cors = require("cors")
const projectRouter = require("./routes/project.router")
const skillRouter = require("./routes/skill.router")
const otpRouter = require("./routes/otp.router")
const userRouter = require("./routes/user.router")
// const { isAdmin } = require("./middlewares/auth.middleware")
const messageRouter = require("./routes/message.router")

const port = process.env.PORT || 3344

const app = express()
app.use(cors())

app.use(express.json())

connectDB()

app.use("/", projectRouter)
app.use("/", skillRouter)
app.use("/", otpRouter)
app.use("/admin", userRouter)  ///isAdmin ,  qoshish kerak
app.use("", messageRouter)


app.listen(port, ()=>{
    console.log(`Server is listen on ${port}`)
})

