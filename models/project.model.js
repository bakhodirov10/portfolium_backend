const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  duration: String,
  difficultyLevel: { type: String,
    enum: {
      values: ['Easy', 'Medium', 'Hard', 'Advanced'],
      message: 'Qiyinchilik darajasi faqat: Easy, Medium, Hard yoki Advanced boʻlishi mumkin'
    }
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Project', projectSchema);