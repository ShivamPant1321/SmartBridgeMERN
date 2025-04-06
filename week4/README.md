# Full Stack MERN Project

This project consists of a React front-end with Tailwind CSS and an Express.js back-end.

## Project Structure

- `/backend` - Express.js server
- `/frontend` - React application

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
```
cd backend
```

2. Install dependencies:
```
npm install
```

3. Start the server:
```
npm run dev
```

The server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
```
cd frontend
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

The application will open in your browser at http://localhost:3000

## Features

- Landing page with hero section, product display, responsive navbar, and footer
- Product details page
- Express.js server with RESTful API endpoints for users
- Express middleware for parsing JSON requests

## API Endpoints

- GET /welcome - Welcome message
- GET /users - Get all users
- POST /users - Create a new user
- PUT /users/:id - Update user by ID
- DELETE /users/:id - Delete user by ID
