import { BadRequestException, Controller, Get } from '@nestjs/common';
import { SportService } from './sport.service';

@Controller('sport')
export class SportController {
    constructor(private readonly sportService : SportService) {}
    @Get('/')
    async getSport(){
        try{
            return this.sportService.getSport();
        }
        catch(error){
            console.log(error);
            throw new BadRequestException(`Failed to get sport.Reason ${error}`)
        }
    }  
}
