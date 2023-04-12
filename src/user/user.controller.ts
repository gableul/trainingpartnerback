import { Controller, Post, Body, UseInterceptors, ClassSerializerInterceptor, Session, UnauthorizedException, BadRequestException } from '@nestjs/common';
import session from 'express-session';
import { LoginDto } from './Dtos/loginDto';
import { SignUpDto } from './Dtos/signUpDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly appService: UserService) {}

  @Post("/signUp")
  async postSignUp(@Body() body : SignUpDto){
    try {
      const user = await this.appService.postSignUp(body)
      return user;
    }
    catch(error){
      throw new BadRequestException(`Failed to create user. Reason ${error.message}`)
    }  
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post("/login")
  async postLogin(@Body() body : LoginDto, @Session() session : Record<string,any>){
      try {
        const user = await this.appService.postLogin(body)
        if (session){
          session.user = user
          session.connected = true
        }
        return session
      }
      catch (error){
        throw new UnauthorizedException(error.message)
      }
  }

  @Post('/logout')
  postLogout(@Session() session : Record<string, any>){
      this.appService.postLogout(session);
  }

}