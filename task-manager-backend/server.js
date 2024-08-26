const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Sample data
let tasks = []

// Load initial tasks from JSON file
const loadTasks = () => {
  try {
    const data = fs.readFileSync('./tasks.json')
    tasks = JSON.parse(data)
  } catch (error) {
    console.error('Error reading tasks:', error)
    tasks = [] // Initialize tasks to an empty array if there's an error
  }
}

// Save tasks to JSON file
const saveTasks = () => {
  fs.writeFileSync('./tasks.json', JSON.stringify(tasks, null, 2))
}

// Load tasks on startup
loadTasks()

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks)
})

// Create a new task
app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1, // This can cause issues if tasks are deleted
    ...req.body,
  }
  tasks.push(newTask)
  saveTasks()
  res.status(201).json(newTask)
})

// Update a task by ID
app.put('/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id))
  if (taskIndex !== -1) {
    tasks[taskIndex] = {id: parseInt(req.params.id), ...req.body}
    saveTasks()
    res.json(tasks[taskIndex])
  } else {
    res.status(404).send('Task not found')
  }
})

// Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id))
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1)
    saveTasks()
    res.status(204).send() // No content to send back
  } else {
    res.status(404).send('Task not found')
  }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
