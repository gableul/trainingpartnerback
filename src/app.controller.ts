import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import * as moment from 'moment';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/date')
  getDate() : string {
    const now = moment();
    const formatted = now.format('DD/MM/YYYY');
    return `${formatted}`;
  }
}

