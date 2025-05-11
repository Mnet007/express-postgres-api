import express from 'express';
import dotenv from 'dotenv';
import usersRoutes from './routes/users.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Express + PostgreSQL CRUD API');
});

// Users route
app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
