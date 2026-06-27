const express = require("express")
const router = express.Router()
const skillController = require("../controllers/skill.controller")

router.get(
    "/skill",
    skillController.getSkills
)

router.get(
    "/skill/:id",
    skillController.getSkillById
)

router.post(
    "/skill",
    skillController.createSkill
)

router.put(
    "/skill/:id",
    skillController.updateSkill
)

router.delete(
    "/skill/:id",
    skillController.deleteSkill
)

router.patch(
    "/skill/:id",
    skillController.patchSkill
)


module.exports = router