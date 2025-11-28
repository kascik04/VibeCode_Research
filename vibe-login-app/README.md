# Vibe Login App

## Overview
Vibe Login App is a React application that provides a user authentication system. It allows users to log in using their email and password, manage their authentication state, and access protected routes.

## Features
- User login with email and password.
- Input validation for login credentials.
- Error handling for various login scenarios.
- Protected routes that restrict access to authenticated users.
- Context API for managing authentication state.

## Technologies Used
- React
- TypeScript
- React Router
- Axios

## Project Structure
```
vibe-login-app
├── src
│   ├── api
│   │   └── authApi.ts        # API functions for authentication
│   ├── context
│   │   └── AuthContext.tsx    # Context for authentication state
│   ├── pages
│   │   └── LoginPage.tsx      # Login form component
│   ├── routes
│   │   └── ProtectedRoute.tsx  # Protected route component
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Entry point of the application
│   └── types
│       └── auth.ts            # TypeScript types and interfaces
├── package.json                # npm configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd vibe-login-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage
- Navigate to the `/login` route to access the login form.
- Enter your email and password to log in.
- Upon successful login, you will be redirected to the dashboard.
- If you attempt to access protected routes without logging in, you will be redirected back to the login page.

## API Endpoints
- **POST /api/auth/login**: Authenticate user and return access token.
- **GET /api/auth/me**: Retrieve user information using the access token.
- **POST /api/auth/logout**: Log the user out.
- **POST /api/auth/refresh**: Refresh the access token.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.