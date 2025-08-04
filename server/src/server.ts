import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import todoRoutes from './routes/todoRoutes';
import userRoutes from './routes/userRoutes';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});