import express from 'express';
import connectDB from './config/database.js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' })

connectDB();

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));