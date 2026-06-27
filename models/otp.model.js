const mongoose = require("mongoose")

const otpSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: "user"
    }
})

module.exports = mongoose.model("OTP", otpSchema)