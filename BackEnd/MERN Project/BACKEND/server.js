var i=0;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req);
  console.log('Global middleware executed');
  console.log(res);
  next();
});

//routes
// Add this to server.js
app.get('/todos', async (req, res) => {
  // console.log(req);
  // console.log(res);
  console.log("getting data");
    const todos = await Todo.find();
    // console.log(todos);
    res.json(todos);
  });














//more routes
app.post('/todos', async (req, res) => {
  console.log("posting data");
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.json(newTodo);
  });

  // Update an existing todo
  app.put('/todos/:id', async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
  });

  // Delete a todo
  app.delete('/todos/:id', async (req, res) => {
  console.log("deleted item");
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deletedd successfully' });
  });



// Connect to MongoDB
mongoose.connect('mongodb+srv://vikaspatel07071999:patel1234@cluster0.cwh80hy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

//model ORM
const todoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean,
  });

  const Todo = mongoose.model('Todo', todoSchema);





// Define routes and middleware
app.listen(PORT, () => {
i++;
console.log(i);
  console.log(`Server is running on port ${PORT}`);
});