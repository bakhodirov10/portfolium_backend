const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")

router.get(
    "/user",
    userController.getUsers
)

router.get(
    "/user/:id",
    userController.getUserById
)

router.post(
    "/user",
    userController.createUser
)

router.put(
    "/user/:id",
    userController.updateUser
)

router.delete(
    "/user/:id",
    userController.deleteUser
)

router.patch(
    "/user/:id",
    userController.patchUser
)


module.exports = router