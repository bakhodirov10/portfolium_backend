const { z } = require("zod");

const messageSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  text: z.string().min(1),
});

module.exports = messageSchema;