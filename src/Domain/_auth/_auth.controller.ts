import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './_auth.service';
import { LogInAuthDto } from './dto/logIn_auth.dto';
import { LogOutAuthDto } from './dto/logOut_auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('logIn')
  logIn(@Body() logInAuthDto: LogInAuthDto) {
    return this.authService.logIn(logInAuthDto);
  }

  @Post('logOut')
  logOut() {
    return this.authService.logOut();
  }
}
