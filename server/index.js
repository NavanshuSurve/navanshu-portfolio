const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const Comment = require("./Comment");
// Allow CORS from frontend
app.use(cors());
// Parse JSON request bodies
app.use(express.json());

connectDB();
let comments = [];

// 🟢 GET all tasks
app.get("/comments", async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch comments" });
  }
});

// 🟢 POST a new task
app.post("/comments", async (req, res) => {
  try {
    const { name, comment } = req.body;

    if (!name || !comment) {
      return res.status(400).json({ message: "Name and comment required" });
    }

    const saved = await Comment.create({ name, comment });

    res.status(201).json({ comment: saved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/", (req, res) => {
  res.send("Comment Manager API running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
