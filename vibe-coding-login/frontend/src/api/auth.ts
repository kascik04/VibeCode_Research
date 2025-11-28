// frontend/src/api/auth.ts

import axios from 'axios';
import { LoginRequestDto, LoginSuccessResponse, LoginErrorResponse } from '../dto/auth.dto';

// Step 1: Define the API endpoint for login
const API_URL = '/auth/login';

// Step 2: Create a function to handle user login
export const login = async (credentials: LoginRequestDto): Promise<LoginSuccessResponse | LoginErrorResponse> => {
  try {
    // Step 3: Send a POST request to the login endpoint with user credentials
    const response = await axios.post<LoginSuccessResponse>(API_URL, credentials);
    
    // Step 4: Return the successful login response
    return response.data;
  } catch (error) {
    // Step 5: Handle errors and return appropriate error response
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as LoginErrorResponse;
    }
    throw new Error('An unexpected error occurred');
  }
};