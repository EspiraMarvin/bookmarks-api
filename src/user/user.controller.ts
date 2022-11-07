import { UserService } from './user.service';
import { EditUserDto } from './dto/edit-user.dto';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { User } from '@prisma/client';
// import { Request } from 'express';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  // Custom decorator, @GetUser() to get user
  getMe(@GetUser() user: User) {
    // get all user data
    // getMe(@GetUser() user: User, @GetUser('email') email: string) { // get user data, or get email of the user
    // getMe(@GetUser() user: User, @GetUser('email') email: string) {
    // get user id
    // console.log('email', email);

    //   getMe(@Req() req: Request) {
    // return req.user;
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
