import { Controller, Post, Body, UseInterceptors, ClassSerializerInterceptor, Session, UnauthorizedException, BadRequestException, Get } from '@nestjs/common';
import { LoginDto } from './Dtos/loginDto';
import { SignUpDto } from './Dtos/signUpDto';
import { UserService } from './user.service';
import { ProfilDto } from './Dtos/profilDto';

@Controller('user')
export class UserController {
  constructor(private readonly userService : UserService) {}

  @Post("/signUp")
  async postSignUp(@Body() body : SignUpDto){
    try {
      const user = await this.userService.postSignUp(body)
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
        const user = await this.userService.postLogin(body)
        if (session){
          session.user = user
          session.connected = true
          //console.log(session,session.user,session.connected);
        }
        return session
      }
      catch (error){
        throw new UnauthorizedException(error.message)
      }
  }

  @Post('/logout')
  postLogout(@Session() session : Record<string, any>){
      this.userService.postLogout(session);
  }

  @Post('/profil')
  async postUser(@Body() body : ProfilDto){
    console.log("body : ",body)
    try {
      if(body){
        const user = await this.userService.postUser(body);
        console.log(user)
        return user;
      }
      else {
        throw new UnauthorizedException("User not connected !");
      }
    }
    catch(error){
      throw new BadRequestException(`Failed to get user profile. Reason ${error.message}`)
    }
  }
}