import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbConfig.js';

dotenv.config();

const app = express();

express.json();
connectDB();

app.get('/', (req, res) => {
  res.send('Hello backend');
});

const PORT = process.env.PORT;

app.listen(() => console.log(`Server run on port ${PORT}`))