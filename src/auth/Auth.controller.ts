import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './Auth.service';
import { AuthLoginDTO } from 'src/DTO/auth/auth-login.dto';
import { AuthRegisterDTO } from 'src/DTO/auth/auth-resgister.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() { email, password }: AuthLoginDTO) {
    return this.authService.login(email, password);
  }

  @Post('register')
  async register(@Body() body: AuthRegisterDTO) {
    return this.authService.register(body);
  }
}
