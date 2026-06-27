const User = require("../models/user.model");
const userSchema = require("../validators/user.validator");

exports.getUsers = async (_req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: `Error is on getUsers: ${error.message}`,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const validation = userSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        message: validation.error.errors,
      });
    }

    const { name, email, password, city, role } = req.body;

    const newUser = new User({
      name,
      email,
      password,
      city,
      role
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: `Error is on createUser: ${error.message}`,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: `Error is on getUserById: ${error.message}`,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: `Error is on updateUser: ${error.message}`,
    });
  }
};

exports.patchUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      },
    );
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: `Error is on patchUser: ${error.message}`,
    });
    console.log(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "User is deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: `Error is on deleteUser: ${error.message}`,
    });
  }
};