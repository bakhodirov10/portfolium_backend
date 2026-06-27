const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name:  String,
  icon:  String,
  category: String,
  level: Number,
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Skill', skillSchema);