import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../api/auth'; // Step 1: Import the login function from the API
import { useHistory } from 'react-router-dom'; // Step 2: Import useHistory for navigation

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Step 3: Initialize react-hook-form
  const [loginError, setLoginError] = useState<string | null>(null); // Step 4: State for login error
  const history = useHistory(); // Step 5: Initialize history for navigation

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const response = await login(data); // Step 6: Call the login API
      // Step 7: Handle successful login
      localStorage.setItem('accessToken', response.accessToken); // Store accessToken in localStorage
      history.push('/'); // Redirect to home page
    } catch (error) {
      // Step 8: Handle login error
      if (error.response) {
        setLoginError(error.response.data.message); // Set error message from response
      } else {
        setLoginError('An unexpected error occurred.'); // Generic error message
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}> {/* Step 9: Form submission */}
      <div>
        <label>Email:</label>
        <input type="email" {...register('email', { required: true })} /> {/* Step 10: Email input */}
        {errors.email && <span>This field is required</span>} {/* Step 11: Error message for email */}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register('password', { required: true })} /> {/* Step 12: Password input */}
        {errors.password && <span>This field is required</span>} {/* Step 13: Error message for password */}
      </div>
      {loginError && <div style={{ color: 'red' }}>{loginError}</div>} {/* Step 14: Display login error */}
      <button type="submit">Login</button> {/* Step 15: Submit button */}
    </form>
  );
};

export default LoginForm; // Step 16: Export the LoginForm component