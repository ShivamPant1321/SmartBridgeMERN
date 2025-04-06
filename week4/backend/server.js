import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// In-memory user database
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
];

// Welcome route
app.get('/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  const newUser = {
    id: users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1,
    name,
    email
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT (update) user by ID
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  users[userIndex] = { ...users[userIndex], ...req.body };
  res.json(users[userIndex]);
});

// DELETE user by ID
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = users.length;
  
  users = users.filter(user => user.id !== id);
  
  if (users.length === initialLength) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json({ message: `User with id ${id} deleted successfully` });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
