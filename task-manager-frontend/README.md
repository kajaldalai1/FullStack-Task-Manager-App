# Task Management Application

A full-stack task management application built with Node.js, Express, MongoDB, and React.js. This app allows users to create, view, update, and delete tasks, with an easy-to-use UI.

## Features

- **Create Task**: Add new tasks with title and description.
- **View Tasks**: View all tasks with their current status.
- **Edit Task**: Update task details or mark as completed/pending.
- **Delete Task**: Remove tasks from the list.
- **Task Status**: Easily toggle between completed and pending states.

## Tech Stack

- **Backend**: Node.js, Express, MongoDB (Mongoose ORM)
- **Frontend**: React.js, Axios for API requests
- **Styling**: CSS with responsive design

## Prerequisites

- **Node.js** and **npm** installed on your machine
- **MongoDB** (local instance or MongoDB Atlas account)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
2. Set Up the Backend
Navigate to the backend directory:

bash
Install dependencies:

bash
npm install
Set up environment variables:

Create a .env file in the main folder with the following content:
MONGODB_URI=mongodb+srv://<username>:<password>@<clustername>.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000
Replace <username>, <password>, <clustername>, and <dbname> with your MongoDB Atlas details.
Start the backend server:

bash
npm start
The backend server should run on http://localhost:5000.

3. Set Up the Frontend
Navigate to the frontend directory:

bash
cd ../task-manager-frontend
Install dependencies:

bash
npm install
Start the frontend development server:

bash
npm start
The frontend will run on http://localhost:3000.

API Endpoints
GET /tasks: Retrieve all tasks.
POST /tasks: Create a new task.
GET /tasks/
: Retrieve a single task by ID.
PUT /tasks/
: Update a task's title, description, or status.
DELETE /tasks/
: Delete a task by ID.
Project Structure

FULLSTACK TASK MANAGER APP

│   ├── config/          # Database configuration
│   ├── controllers/     # Route controllers
│   ├── models/          # Mongoose models
│   ├── routes/          # Express routes
│   └── server.js        # Entry point for backend server
├── frontend/
│   ├── src/
│   │   ├── components/  # React components (TaskForm, TaskList, TaskItem)
│   │   ├── services/    # Axios API service
│   │   └── App.js       # Main React app component
│   └── public/          # Public assets and index.html
└── README.md            # Project documentation
Troubleshooting
MongoDB Authentication Failed: Ensure your MongoDB URI is correct in the .env file, and that the MongoDB user has sufficient permissions.
CORS Issues: Make sure CORS is enabled in the backend to allow frontend requests.
Port Conflicts: If ports 5000 (backend) or 3000 (frontend) are in use, change them in .env or package.json.
License
This project is licensed under the MIT License.

Author
Kajal Dalai
GitHub: kajaldalai1