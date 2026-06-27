const { z } = require('zod');

const skillSchema = z.object({
    name: z.string().min(3).trim(),
    icon: z.string().min(3).trim(),
    category: z.enum(["Frontend", "Backend", "Database", "Mobile", "Tools"]),
    level: z.number().min(1).max(100),
})

module.exports = skillSchema 