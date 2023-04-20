import { Module } from '@nestjs/common';
import { ExerciceCourseController } from './exercice-course.controller';
import { ExerciceCourseService } from './exercice-course.service';

@Module({
  controllers: [ExerciceCourseController],
  providers: [ExerciceCourseService]
})
export class ExerciceCourseModule {}
