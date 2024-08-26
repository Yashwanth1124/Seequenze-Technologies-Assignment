# Task Manager Application

This is a task manager application built with React for the frontend and Node.js/Express for the backend. The app allows users to create, update, and delete tasks, as well as track their completion status.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Design Decisions](#design-decisions)
- [License](#license)

## Features

- Create new tasks with title, description, and status.
- Update task status (To Do, In Progress, Done).
- Delete tasks.
- View tasks categorized by their status.

## Technologies Used

- **Frontend:** React, Axios
- **Backend:** Node.js, Express
- **Database:** JSON file storage (tasks are stored in `tasks.json`)

## Setup Instructions

### Prerequisites

- Node.js (v12 or later)
- npm (Node Package Manager)

### Frontend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yashwanth1124/Seequenze-Technologies-Assignment.git
   cd task-manager-frontend
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The application will be running at http://localhost:3000.

Backend Setup
Navigate to the backend directory:

bash
Copy code
cd task-manager-backend
Install dependencies:

bash
Copy code
npm install
Start the backend server:

bash
Copy code
node server.js
The backend will be running at http://localhost:5000.

Initial Tasks
When you start the backend server for the first time, the tasks are loaded from the tasks.json file. If the file is empty or does not exist, the application will initialize an empty task list.
Project Structure
Frontend (task-manager-frontend/src)
bash
Copy code
src/
├── components/
│   ├── TaskCard.js      # Component to display individual task
│   └── TaskForm.js      # Component to create new tasks
├── App.js               # Main application component
├── App.css              # CSS styles for the app
└── index.js             # Entry point for the React application
Backend (task-manager-backend)
perl
Copy code
task-manager-backend/
├── tasks.json           # JSON file to store tasks
├── server.js            # Express server configuration
├── package.json         # Backend dependencies
└── package-lock.json    # Dependency lock file
Design Decisions
State Management: The frontend uses local state management with React hooks (useState, useEffect) to manage tasks and loading state.
API Communication: Axios is used for making HTTP requests to the backend for fetching, creating, updating, and deleting tasks.
File Storage: Tasks are stored in a JSON file (tasks.json) for simplicity, allowing easy access and modification. This can be replaced with a database (like MongoDB) for a production-ready application.
Responsive Design: The application is designed to be user-friendly, with clear visual feedback when tasks are added, updated, or deleted.
License
This project is licensed under the MIT License - see the LICENSE file for details.

vbnet
Copy code

### Instructions for Using the README
- Replace placeholders with relevant details if needed.
- Adjust the technologies or features based on your actual implementation.
- Ensure that the installation commands match your project's package manager (npm, yarn, etc.).

Feel free to modify or expand upon this template to better fit your project's needs!





