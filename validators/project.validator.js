const { z } = require('zod');

const projectSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(10),
    techStack: z.string().min(3),
    duration: z.string(),
    difficultyLevel: z.enum(["Easy", "Medium", "Hard", "Advanced"])
});

module.exports = projectSchema