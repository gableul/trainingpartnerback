import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import * as moment from 'moment';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}
  private savedMessage = "";
  private graph1 = {
    title: 'Test1',
    labels: [ 'blblalal', 'blablou', 'biteOQ' ],
    values: [ '3', '10', '5' ],
    sport: 'escalade',
    graph: 'polar',
    date: '09/04/2023'
  }

  private graph2 = {
    title: 'Test2',
    labels: [ 'Test1', 'TEst3' ],
    values: [ '2', '5' ],
    sport: 'escalade',
    graph: 'bar',
    date: ''
  }
  
  private graph3 = {
    title: 'Test3',
    labels: [ 'Test1', 'TEst3' ],
    values: [ '3', '4' ],
    sport: 'escalade',
    graph: 'bar',
    date: ''
  }

  private graph4 = {
    title: 'Test4',
    labels: [ 'Test1', 'TEst3' ],
    values: [ '3', '4' ],
    sport: 'escalade',
    graph: 'polar',
    date: ''
  }
  
  private graph5 = {
    title: 'Test5',
    labels: [ 'Test1', 'TEst3' ],
    values: [ '3', '4' ],
    sport: 'escalade',
    graph: 'bar',
    date: ''
  }
  private graph6 = {
    title: 'Test6',
    labels: [ 'Test1', 'TEst3' ],
    values: [ '3', '4' ],
    sport: 'escalade',
    graph: 'bar',
    date: ''
  }




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
<<<<<<< HEAD

  @Post('chartVisu/getlstGraph')
  sendGraphlist( @Body('sport') sport : any){
    console.log('Received message:', sport);
    switch(sport){
      case "escalade":{
        return [this.graph1, this.graph2];
      }
      case "course":{
        return [this.graph3, this.graph4];

      }
      case "musculation":{
        return [this.graph5, this.graph6];
      }
      default: {
        return [];
      }
    }
  }


  @Get('activite/creer')
    getMessagebis() : string{
    return this.savedMessage;
  }
  @Post('/activite/creer')
  create2 (@Body() message :any){
    this.savedMessage = message;
    console.log(message);
  }
}

=======
}
>>>>>>> db1d4c7aa23a7a145f014c4902bbd0eaaf7b968d
