const express = require("express")
const router = express.Router()
const MessageController = require("../controllers/message.controller")

router.post(
    "/message",
    MessageController.sendMessage
)

module.exports = router