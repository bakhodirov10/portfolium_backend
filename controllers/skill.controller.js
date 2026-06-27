const Skill = require("../models/skill.model");
const skillSchema = require("../validators/skill.validator");

exports.getSkills = async (_req, res) => {
  try {
    const skills = await Skill.find()
    res.json(skills);
  } catch (error) {
    res.status(500).json({
      message: `Error is on getSkills: ${error.message}`,
    });
  }
};

exports.createSkill = async (req, res) => {
  try {
    const validation = skillSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        message: validation.error.errors,
      });
    }

    const { name, icon, category, level } = req.body;

    const newSkill = new Skill({
      name,
      icon,
      category,
      level
    });

    await newSkill.save();

    res.status(201).json(newSkill);
  } catch (error) {
    res.status(500).json({
      message: `Error is on createSkill: ${error.message}`,
    });
  }
};

exports.getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      req.status(404).json({
        message: "Skill is no found",
      });
    }
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({
      message: `Error is on getSkillById: ${error.message} `,
    });
  }
};

exports.updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!skill) {
      req.status(404).json({
        message: "Skill is no found",
      });
    }
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({
      message: `Error is on updateSkill: ${error.message}`,
    });
  }
};

exports.patchSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      id,
      { $set: updates },
      {
        new: true,
        runValidators: true,
      },
    );
    if (!skill) {
      return res.status(404).json({
        message: "Skill not found",
      });
    }

    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({
      message: `Error is on patchSkill: ${error.message}`,
    });
    console.log(error.message);
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) {
      req.status(404).json({
        message: "Skill is no found",
      });
    }
    res.status(200).json({
      message: "Skill is deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: `Error is on deleteSkill: ${error.message}`,
    });
  }
};