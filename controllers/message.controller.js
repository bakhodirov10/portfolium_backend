const Message = require("../models/message.model");
const messageSchema = require("../validators/message.validator");
const message = require("../config/message");

exports.sendMessage = async (req, res) => {
  try {
    const validation = messageSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        message: validation.error.errors,
      });
    }

    const { name, email, text } = req.body;

    const newMessage = new Message({
      name,
      email,
      text
    });
    await newMessage.save();

    await message.sendMail({
      from: "boxodirovabdulloh46@gmail.com",
      to: "boxodirovabdulloh46@gmail.com",
      subject: "Portfoliya saytingizdan yangi xabar!",
      text: `Yuboruvchi: ${name}\nEmaili: ${email}\nXabar matni: ${text}`
    });

    res.status(201).json({
      message: "Xabaringiz muvaffaqiyatli yuborildi va saqlandi!",
      data: newMessage
    });

  } catch (error) {
    res.status(500).json({
      message: `Error is on sendMessage: ${error.message}`,
    });
    console.log(error);
  }
};