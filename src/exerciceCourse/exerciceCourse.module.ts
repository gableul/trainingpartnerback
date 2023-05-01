import { Module } from '@nestjs/common';
import { ExerciceCourseController } from './exerciceCourse.controller';
import { ExerciceCourseService } from './exerciceCourse.service';
import { ExerciceCourse } from './exerciceCourse.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seance } from 'src/seance/seance.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports : [TypeOrmModule.forFeature([ExerciceCourse]),TypeOrmModule.forFeature([Seance]),TypeOrmModule.forFeature([User])],
  controllers: [ExerciceCourseController],
  providers: [ExerciceCourseService]
})
export class ExerciceCourseModule {}
