import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule, // Import UsersModule to access user-related services
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'defaultSecret', // Use environment variable for JWT secret
      signOptions: { expiresIn: '1h' }, // Set token expiration time
    }),
  ],
  controllers: [AuthController], // Register AuthController
  providers: [AuthService], // Register AuthService
})
export class AuthModule {}