require('dotenv').config();
const express = require('express');
const cors = require('cors');
const initializeDatabase = require('./config/dbInit');
const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/jobs');
const candidateRoutes = require('./routes/candidates');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'your-production-domain.com' 
    : 'http://localhost:5173'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize database
initializeDatabase();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/candidates', candidateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
