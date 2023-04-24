import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { GraphiqueService } from './graphique.service';
import { GraphiqueDto } from './Dto/graphiqueDto';

@Controller('graphique')
export class GraphiqueController {
    constructor(private readonly graphiqueService : GraphiqueService) {}

    @Post('/create')
    async postChartCreate(@Body() body : GraphiqueDto){
        const pseudo = body.userPseudo;
        try{
            return this.graphiqueService.postChartCreate(body,pseudo);
        }
        catch(error){
            console.log(error);
            throw new BadRequestException(`Failed to create chart.Reason ${error}`)
        }
    }  
}
