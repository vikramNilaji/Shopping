import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 

// Import the combined auth routes file (Note the explicit .js extension)
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();

// Middleware to parse JSON body data
app.use(express.json());

// connectDB(); 

// Link your auth routes file to the base path
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
connectDB()
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));