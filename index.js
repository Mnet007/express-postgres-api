import express from 'express';
import usersRouter from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/users', usersRouter);

app.get('/', (req, res) => res.send('Welcome to the PostgreSQL API'));

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
