import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { SeanceService } from './seance.service';
import { SeanceDto } from './Dto/seanceDto';
import { Seance } from './seance.entity';

@Controller('seance')
export class SeanceController {
    constructor(private readonly seanceService : SeanceService){}

    @Post('/seances')
    getAllSeance(@Body() body : string):Promise<Seance[]>{
        return this.seanceService.getSeance(body);
    }
 
    @Post('/createSeance')
    async postChartCreate(@Body() body : SeanceDto){
        const pseudo = body.userPseudo;
        try{
            return this.seanceService.postSeanceCreate(body, pseudo);
        }
        catch(error){
            console.log(error);
            throw new BadRequestException(`Failed to create seance.Reason ${error}`)
        }
    }  
}
