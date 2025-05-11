import { pool } from '../db.js';

// Get all users
export const getUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single user
export const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'User not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a user
export const createUser = async (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) return res.status(400).json({ error: 'Missing fields' });

  try {
    await pool.query('INSERT INTO users (name, email, age) VALUES ($1, $2, $3)', [name, email, age]);
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a user
export const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, age } = req.body;

  try {
    const result = await pool.query('UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4', [name, email, age, id]);
    if (result.rowCount === 0) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    if (result.rowCount === 0) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
