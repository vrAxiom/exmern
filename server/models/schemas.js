const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  skills: [String],
  experience: [{
    company: String,
    position: String,
    duration: String
  }],
  education: [{
    institution: String,
    degree: String,
    year: String
  }],
  resume: {
    url: String,
    parsedData: Object
  },
  applications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobPosting'
  }]
}, { timestamps: true });

const JobPostingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  requirements: [String],
  location: String,
  salary: {
    min: Number,
    max: Number,
    currency: String
  },
  visible: { type: Boolean, default: true },
  expirationDate: { type: Date, required: true },
  applications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candidate'
  }]
}, { timestamps: true });

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, default: 'admin' }
}, { timestamps: true });

module.exports = {
  CandidateSchema,
  JobPostingSchema,
  AdminSchema
}; 