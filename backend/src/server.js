// server.js - Main Express server
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const userRoutes = require('./routes/users');
const repoRoutes = require('./routes/repos');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware: Security, CORS, JSON parsing
app.use(helmet()); // Secures Express headers (CSP, etc.)
app.use(cors({ origin: 'http://localhost:3000' })); // Allow React dev server
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/repos', repoRoutes);

// Error handler (basic)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

module.exports = app; // For testing