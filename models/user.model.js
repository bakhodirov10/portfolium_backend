const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    city: String,
    role: String
})

module.exports = mongoose.model("User", userSchema)