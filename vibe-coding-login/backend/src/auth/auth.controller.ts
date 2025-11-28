import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/login-request.dto';
import { LoginSuccessResponse } from './dto/login-success-response.dto';
import { LoginErrorResponse } from './dto/login-error-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Step 1: Handle login requests
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() loginRequestDto: LoginRequestDto,
  ): Promise<LoginSuccessResponse | LoginErrorResponse> {
    try {
      // Step 2: Call AuthService to handle login logic
      const loginResponse = await this.authService.login(loginRequestDto);
      return loginResponse; // Step 3: Return successful login response
    } catch (error) {
      // Step 4: Handle errors and return appropriate error response
      if (error.code === 'INVALID_CREDENTIALS') {
        return {
          errorCode: 'INVALID_CREDENTIALS',
          message: 'Invalid email or password.',
        };
      } else if (error.code === 'USER_INACTIVE') {
        return {
          errorCode: 'USER_INACTIVE',
          message: 'User account is inactive.',
        };
      } else if (error.code === 'TOO_MANY_ATTEMPTS') {
        return {
          errorCode: 'TOO_MANY_ATTEMPTS',
          message: 'Too many failed login attempts. Please try again later.',
        };
      }
      // Fallback for unexpected errors
      throw error;
    }
  }
}