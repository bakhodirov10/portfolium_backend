const Project = require("../models/project.model");
const projectSchema = require("../validators/project.validator");

exports.getProjects = async (_req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: `Error is on getProject: ${error.message}`,
    });
  }
};

exports.createProject = async (req, res) => {
  try {
    const validation = projectSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        message: validation.error.errors,
      });
    }

    const { title, description, techStack, duration, difficultyLevel } = req.body;

    const newProject = new Project({
      title,
      description,
      techStack,
      duration,
      difficultyLevel
    });

    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({
      message: `Error is on createProject: ${error.message}`,
    });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      req.status(404).json({
        message: "Project is no found",
      });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: `Error is on getProjectById: ${error.message} `,
    });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!project) {
      req.status(404).json({
        message: "Project is no found",
      });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: `Error is on updateProject: ${error.message}`,
    });
  }
};

exports.patchProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      id,
      { $set: updates },
      {
        new: true,
        runValidators: true,
      },
    );
    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: `Error is on patchProject: ${error.message}`,
    });
    console.log(error.message);
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      req.status(404).json({
        message: "Project is no found",
      });
    }
    res.status(200).json({
      message: "Project is deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: `Error is on deleteProject: ${error.message}`,
    });
  }
};
