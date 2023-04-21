import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { SeanceService } from './seance.service';
import { SeanceDto } from './Dto/seanceDto';
import { Seance } from './seance.entity';

@Controller('seance')
export class SeanceController {
    constructor(private readonly seanceService : SeanceService){}

    @Get()
    getAllSeance():Promise<Seance[]>{
        return this.seanceService.getSeance();
    }

    @Post('/createSeance')
    async postChartCreate(@Body() body : SeanceDto){
        try{
            return this.seanceService.postSeanceCreate(body);
        }
        catch(error){
            console.log(error);
            throw new BadRequestException(`Failed to create seance.Reason ${error}`)
        }
    }  
}
