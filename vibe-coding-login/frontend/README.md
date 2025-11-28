# Frontend README.md

# Vibe Coding Login - Frontend

## Overview

This is the frontend application for the Vibe Coding Login project. It is built using React and TypeScript, providing a user-friendly interface for users to log in to their accounts.

## Project Structure

The project is organized as follows:

```
frontend
├── src
│   ├── components          # Contains React components
│   │   └── LoginForm.tsx   # Login form component
│   ├── api                 # API calls to the backend
│   │   └── auth.ts         # Authentication API functions
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point of the application
│   └── routes              # Route components
│       └── PrivateRoute.tsx # Protected route component
├── package.json            # NPM dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Installation

To get started with the frontend application, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd vibe-coding-login/frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The application will be running on `http://localhost:3000`.

## Usage

- Navigate to the login page to enter your credentials.
- Upon successful login, you will be redirected to the protected area of the application.
- If login fails, appropriate error messages will be displayed.

## API Integration

The frontend communicates with the backend through the following API endpoint:

- **POST /auth/login**: Sends user credentials to the backend for authentication.

## Testing

To run tests, use the following command:

```
npm test
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.