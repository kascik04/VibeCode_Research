# Vibe Coding Login

## Overview
Vibe Coding Login is a full-stack application that provides user authentication functionality. The application is built using NestJS for the backend and React for the frontend. It allows users to log in using their email and password, and it manages user sessions with JWT tokens.

## Project Structure
The project is organized into two main directories: `backend` and `frontend`.

### Backend
The backend is built with NestJS and TypeORM, and it handles user authentication and data management.

- **src**
  - **auth**
    - `auth.controller.ts`: Handles incoming requests to the `/auth/login` endpoint.
    - `auth.service.ts`: Contains business logic for user authentication.
    - `auth.module.ts`: Encapsulates authentication functionality.
    - **dto**
      - `login-request.dto.ts`: Defines the structure of the login request payload.
      - `login-success-response.dto.ts`: Defines the structure of the successful login response.
      - `login-error-response.dto.ts`: Defines the structure of error responses for login failures.
    - `jwt.strategy.ts`: Exports the JWT strategy for authentication.
  - **users**
    - `user.entity.ts`: Defines the structure of the users table in the PostgreSQL database.
    - `users.service.ts`: Contains methods for interacting with the users table.
    - `users.module.ts`: Encapsulates user-related functionality.
  - `main.ts`: Entry point of the backend application.
  - `app.module.ts`: Root module of the application.

### Frontend
The frontend is built with React and handles user interactions and API calls.

- **src**
  - **components**
    - `LoginForm.tsx`: Renders the login form and handles user input.
  - **api**
    - `auth.ts`: Contains functions for making API calls to the authentication endpoints.
  - `App.tsx`: Main application component that sets up routing.
  - `index.tsx`: Entry point of the frontend application.
  - **routes**
    - `PrivateRoute.tsx`: Wrapper for protected routes that checks user authentication.

## Getting Started

### Prerequisites
- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd vibe-coding-login
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Set up the PostgreSQL database and update the connection settings in the backend configuration.

4. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm run start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

## API Endpoints
- **POST /auth/login**: Authenticates a user and returns JWT tokens.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- NestJS for the backend framework.
- React for the frontend framework.
- TypeORM for database interaction.
- PostgreSQL for the database.