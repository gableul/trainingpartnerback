import { Module } from '@nestjs/common';
import { ExerciceCourseController } from './exerciceCourse.controller';
import { ExerciceCourseService } from './exerciceCourse.service';

@Module({
  controllers: [ExerciceCourseController],
  providers: [ExerciceCourseService]
})
export class ExerciceCourseModule {}
