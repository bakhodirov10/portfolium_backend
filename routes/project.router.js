const express = require("express")
const router = express.Router()
const projectController = require("../controllers/project.controller")

router.get(
    "/project",
    projectController.getProjects
)

router.get(
    "/project/:id",
    projectController.getProjectById
)

router.post(
    "/project",
    projectController.createProject
)

router.put(
    "/project/:id",
    projectController.updateProject
)

router.delete(
    "/project/:id",
    projectController.deleteProject
)

router.patch(
    "/project/:id",
    projectController.patchProject
)


module.exports = router