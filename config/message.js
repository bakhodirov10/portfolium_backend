const nodemailer = require("nodemailer")

const message = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "boxodirovabdulloh46@gmail.com",
        pass: "tkgbiouaetnwbdrz"
    }
})

module.exports = message