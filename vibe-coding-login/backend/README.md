# README for Backend

## Project Overview

This backend project is built using NestJS and TypeORM, providing a robust authentication system for users. It connects to a PostgreSQL database to manage user data and implements JWT for secure authentication.

## Features

- User login with email and password
- JWT token generation for authenticated users
- Handling of failed login attempts
- User account status management (active/inactive)

## Project Structure

```
backend
├── src
│   ├── auth
│   │   ├── auth.controller.ts       # Handles login requests
│   │   ├── auth.service.ts          # Contains business logic for authentication
│   │   ├── auth.module.ts           # NestJS module for authentication
│   │   ├── dto
│   │   │   ├── login-request.dto.ts  # DTO for login request
│   │   │   ├── login-success-response.dto.ts # DTO for successful login response
│   │   │   └── login-error-response.dto.ts   # DTO for login error responses
│   │   └── jwt.strategy.ts          # JWT strategy for authentication
│   ├── users
│   │   ├── user.entity.ts           # User entity definition
│   │   ├── users.service.ts         # Service for user-related operations
│   │   └── users.module.ts          # NestJS module for user management
│   ├── main.ts                      # Entry point of the application
│   └── app.module.ts                # Root module of the application
├── package.json                     # NPM dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # Documentation for the backend project
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd vibe-coding-login/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your PostgreSQL database and update the connection settings in the `ormconfig.json` file (if applicable).

4. Run the application:
   ```
   npm run start
   ```

## API Endpoints

### POST /auth/login

- **Request Body**: 
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```

- **Responses**:
  - **200 OK**: Successful login returns access token and user information.
  - **401 Unauthorized**: Invalid credentials.
  - **423 Locked**: Too many failed login attempts.
  - **403 Forbidden**: User account is inactive.

## Testing

To run tests, use the following command:
```
npm run test
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- NestJS for the framework
- TypeORM for database interaction
- PostgreSQL for the database management system

---

This README provides a comprehensive overview of the backend project, including its structure, installation instructions, API endpoints, and testing guidelines.