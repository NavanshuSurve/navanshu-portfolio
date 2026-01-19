const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Allow CORS from frontend
app.use(cors({ origin: 'http://localhost:5173' }));

// Parse JSON request bodies
app.use(express.json());


let comments = [];

// 🟢 GET all tasks
app.get('/comments', (req, res) => {
  res.json(comments);
});

// 🟢 POST a new task
app.post('/comments', (req, res) => {
  const newComment = req.body;
  console.log('Received new task:', newComment);

  comments.push(newComment);
  res.json({ message: 'Task added successfully!', task: newTask });
});



app.get('/', (req, res) => {
  res.send('Comment Manager API running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
