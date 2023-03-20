import { Controller, Get, Render } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService){}
    @Get("signUp")
    @Render("user/signUp")
    getSignUp(){}

    @Get("login")
    @Render("user/login")
    getLogin(){}
}
