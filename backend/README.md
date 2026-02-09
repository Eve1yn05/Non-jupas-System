# Non-JUPAS Backend Setup Guide

## Installation

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running on your system

## Running the Server

### Development (with auto-reload):
```bash
npm run dev
```

### Production:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication Routes

#### 1. Login
**POST** `/api/auth/login`

Request body:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "username": "username",
    "userType": "student"
  }
}
```

#### 2. Register
**POST** `/api/auth/register`

Request body:
```json
{
  "email": "newuser@example.com",
  "password": "password123",
  "username": "newuser",
  "userType": "student"
}
```

Response: Same as login

#### 3. Get Current User
**GET** `/api/auth/me`

Headers:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

Response:
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "username": "username",
    "userType": "student"
  }
}
```

#### 4. Logout
**POST** `/api/auth/logout`

Headers:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

## Database

The backend uses MongoDB. By default, it connects to `mongodb://localhost:27017/non-jupas`

To use a different MongoDB instance, set the `MONGODB_URI` environment variable in `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/non-jupas
```

## Environment Variables

Update `.env` file with your configuration:
- `PORT`: Server port (default: 5000)
- `JWT_SECRET`: Secret key for JWT tokens
- `JWT_EXPIRY`: Token expiry time (default: 7d)
- `MONGODB_URI`: MongoDB connection string

## Features

- User registration and login
- Password hashing with bcrypt
- JWT token authentication
- User roles (student/teacher)
- Account status tracking
- Last login tracking
- Email validation
- Username uniqueness validation
