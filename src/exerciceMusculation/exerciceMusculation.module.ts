import { Module } from '@nestjs/common';
import { ExerciceMusculationService } from './exerciceMusculation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciceMuscu } from './exerciceMuscu.entity';
import { Seance } from 'src/seance/seance.entity';
import { User } from 'src/user/user.entity';
import { ExerciceMusculationController } from './exerciceMusculation.controller';

@Module({
  imports : [TypeOrmModule.forFeature([ExerciceMuscu]),TypeOrmModule.forFeature([Seance]),TypeOrmModule.forFeature([User])],
  controllers: [ExerciceMusculationController],
  providers: [ExerciceMusculationService]
})
export class ExerciceMusculationModule {}
