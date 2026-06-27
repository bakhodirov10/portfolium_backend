const { z, positive } = require("zod")

const userSchema = z.object({
    name: z.string().min(3),
    age: z.number().min(1).positive(),
    email: z.string().email(),
    city: z.string(),
    role: z.string().default("user")
})

module.exports = userSchema