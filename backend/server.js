const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const todosFile = path.join(__dirname, "data", "todos.json");

// Read all todos
app.get("/api/todos", (req, res) => {
  const todos = JSON.parse(fs.readFileSync(todosFile, "utf8"));
  res.json(todos);
});

// Add a new todo
app.post("/api/todos", (req, res) => {
  const todos = JSON.parse(fs.readFileSync(todosFile, "utf8"));
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
    completed: false,
  };
  todos.push(newTodo);
  fs.writeFileSync(todosFile, JSON.stringify(todos, null, 2));
  res.json(newTodo);
});

// Toggle complete
app.put("/api/todos/:id", (req, res) => {
  const todos = JSON.parse(fs.readFileSync(todosFile, "utf8"));
  const todo = todos.find((t) => t.id == req.params.id);
  if (!todo) return res.status(404).json({ message: "Not found" });
  todo.completed = !todo.completed;
  fs.writeFileSync(todosFile, JSON.stringify(todos, null, 2));
  res.json(todo);
});

// Delete todo
app.delete("/api/todos/:id", (req, res) => {
  let todos = JSON.parse(fs.readFileSync(todosFile, "utf8"));
  todos = todos.filter((t) => t.id != req.params.id);
  fs.writeFileSync(todosFile, JSON.stringify(todos, null, 2));
  res.json({ message: "Deleted" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
