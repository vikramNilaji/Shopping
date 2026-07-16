const express = require('express');
const dotenv = require('dotenv');
// const connectDB = require('./config/db'); 

// 1. Import the combined auth routes file
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();

// Middleware to parse JSON body data (Required to read req.body)
app.use(express.json());

// connectDB(); // Fire up your MongoDB connection

// 2. Link your auth routes file to a base path
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));