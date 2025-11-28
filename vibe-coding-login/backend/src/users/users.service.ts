import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { LoginRequestDto } from '../auth/dto/login-request.dto';
import { increaseFailedLoginAttempts, resetFailedLoginAttempts } from '../auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // Step 1: Find user by email
  async findByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }

  // Step 2: Increase failed login attempts
  async increaseFailedAttempts(user: User): Promise<void> {
    user.failedLoginAttempts++;
    await this.usersRepository.save(user);
  }

  // Step 3: Reset failed login attempts
  async resetFailedAttempts(user: User): Promise<void> {
    user.failedLoginAttempts = 0;
    await this.usersRepository.save(user);
  }

  // Step 4: Check if user is active
  async isUserActive(user: User): Promise<boolean> {
    return user.isActive;
  }
}