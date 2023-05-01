import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ExerciceMusculationService } from './exerciceMusculation.service';
import { ExerciceMuscuDto } from './Dto/exerciceMuscuDto';

@Controller('exerciceMusculation')
export class ExerciceMusculationController {
    constructor(private readonly exerciceMusculationService : ExerciceMusculationService) {}

    @Post('/exercice')
    async postChartCreate(@Body() body : ExerciceMuscuDto){
        try{
            console.log(body);
            return this.exerciceMusculationService.postExerciceMuscu(body);
        }
        catch(error){
            throw new BadRequestException(`Failed to create seance.Reason ${error}`)
        }
    }  
}
