import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup') //status code 201
  signup(@Body() dto: AuthDto) {
    console.log({
      dto,
    });

    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK) //status code 200
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
