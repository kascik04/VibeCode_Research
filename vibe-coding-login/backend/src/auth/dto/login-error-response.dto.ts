export interface LoginErrorResponse {
  errorCode: 'INVALID_CREDENTIALS' | 'USER_INACTIVE' | 'TOO_MANY_ATTEMPTS';
  message: string;
}