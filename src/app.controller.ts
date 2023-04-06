import { Controller, Get, Post,Body, Render } from '@nestjs/common';
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

}
