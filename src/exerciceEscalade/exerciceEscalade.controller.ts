import { Controller, Body, Post, BadRequestException } from '@nestjs/common';
import { ExerciceEscaladeDto } from './Dto/exerciceEscaladeDto';
import { ExerciceEscaladeService } from './exerciceEscalade.service';

@Controller('exerciceEscalade')
export class ExerciceEscaladeController {
    constructor(private readonly exerciceEscaladeService : ExerciceEscaladeService) {}
    @Post('/exercice')
    async postChartCreate(@Body() body : ExerciceEscaladeDto){
        try{
            console.log(body);
            return this.exerciceEscaladeService.postExerciceEscalade(body);
        }
        catch(error){
            throw new BadRequestException(`Failed to create seance.Reason ${error}`)
        }
    }  
}
