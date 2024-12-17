const mongoose = require('mongoose');
const { CandidateSchema, JobPostingSchema, AdminSchema } = require('../models/schemas');
const bcrypt = require('bcryptjs');

const initializeDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB Atlas');

    const collections = await mongoose.connection.db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);

    if (!collectionNames.includes('candidates')) {
      mongoose.model('Candidate', CandidateSchema);
      console.log('Candidates collection created');
    }

    if (!collectionNames.includes('jobpostings')) {
      mongoose.model('JobPosting', JobPostingSchema);
      console.log('JobPostings collection created');
    }

    if (!collectionNames.includes('admins')) {
      const Admin = mongoose.model('Admin', AdminSchema);
      
      // Create default admin if none exists
      const adminExists = await Admin.findOne({ username: 'admin' });
      if (!adminExists) {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        await Admin.create({
          username: 'admin',
          password: hashedPassword,
          email: 'admin@jobportal.com'
        });
        console.log('Default admin account created');
      }
      console.log('Admins collection created');
    }

  } catch (error) {
    console.error('Database initialization failed:', error);
    process.exit(1);
  }
};

module.exports = initializeDatabase; 