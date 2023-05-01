import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ExerciceCourseDto } from './Dto/exerciceCourseDto';
import { ExerciceCourseService } from './exerciceCourse.service';

@Controller('exerciceCourse')
export class ExerciceCourseController {
    constructor(private readonly exerciceCourseService : ExerciceCourseService) {}
    @Post('/exercice')
    async postChartCreate(@Body() body : ExerciceCourseDto){
        try{
            console.log(body);
            return this.exerciceCourseService.postExerciceCourse(body);
        }
        catch(error){
            throw new BadRequestException(`Failed to create seance.Reason ${error}`)
        }
    }  
}
