import { Controller, Get, Render, Post, Body, Redirect, UseInterceptors, ClassSerializerInterceptor, Session, UnauthorizedException, BadRequestException } from '@nestjs/common';
import session from 'express-session';
import { LoginDto } from './Dtos/loginDto';
import { SignUpDto } from './Dtos/signUpDto';

import { AppService } from './app.service';
import * as moment from 'moment';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}
  private savedMessage = "";
  @Get('/date')
  getDate() : string {
    const now = moment();
    const formatted = now.format('DD/MM/YYYY');
    return `${formatted}`;
  }
  
  @Post('/chartCreate/saveGraph')
  create (@Body() message : any ){
    console.log(message);
    console.log('ca passe')
    this.savedMessage = message;
  }

  @Get('/chartCreate/getMessage')
    getMessage() : string{
    return this.savedMessage;
    }

  @Post("/signUp")
  async postSignUp(@Body() body : SignUpDto){
    try {
      const user = await this.appService.postSignUp(body)
      console.log("user Created",user)
      return user;
    }
    catch(error){
      console.log("Failed to created user",error.message)
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
  PostLogout(@Session() session : Record<string,any>){
      session.destroy((err => {}))
  }

}