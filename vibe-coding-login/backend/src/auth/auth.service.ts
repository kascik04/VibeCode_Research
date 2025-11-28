export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  // Step 1: Login method to handle user authentication
  async login(loginRequestDto: LoginRequestDto): Promise<LoginSuccessResponse | LoginErrorResponse> {
    const { email, password } = loginRequestDto;

    // Step 2: Find user by email
    const user = await this.usersRepository.findOne({ where: { email } });

    // Step 3: Check if user exists
    if (!user) {
      return {
        errorCode: 'INVALID_CREDENTIALS',
        message: 'Invalid email or password',
      };
    }

    // Step 4: Check if user is active
    if (!user.isActive) {
      return {
        errorCode: 'USER_INACTIVE',
        message: 'User is inactive',
      };
    }

    // Step 5: Verify password
    const isPasswordValid = await verifyPassword(password, user.passwordHash);
    if (!isPasswordValid) {
      await this.increaseFailedLoginAttempts(user);
      return {
        errorCode: 'INVALID_CREDENTIALS',
        message: 'Invalid email or password',
      };
    }

    // Step 6: Reset failed login attempts on successful login
    await this.resetFailedLoginAttempts(user);

    // Step 7: Generate JWT access token
    const accessToken = this.generateAccessToken(user);

    // Step 8: Optionally, generate refresh token (not implemented here)
    const refreshToken = undefined; // Placeholder for refresh token logic

    // Step 9: Return success response
    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
      },
    };
  }

  // Step 10: Function to increase failed login attempts
  private async increaseFailedLoginAttempts(user: User): Promise<void> {
    user.failedLoginAttempts++;
    if (user.failedLoginAttempts > 5) {
      user.isActive = false; // Lock the user account after too many attempts
    }
    await this.usersRepository.save(user);
  }

  // Step 11: Function to reset failed login attempts
  private async resetFailedLoginAttempts(user: User): Promise<void> {
    user.failedLoginAttempts = 0;
    await this.usersRepository.save(user);
  }

  // Step 12: Function to generate JWT access token
  private generateAccessToken(user: User): string {
    return this.jwtService.sign({ sub: user.id, email: user.email });
  }
}