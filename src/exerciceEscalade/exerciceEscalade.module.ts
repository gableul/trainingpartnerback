import { Module } from '@nestjs/common';
import { ExerciceEscaladeController } from './exerciceEscalade.controller';
import { ExerciceEscaladeService } from './exerciceEscalade.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seance } from 'src/seance/seance.entity';
import { ExerciceEscalade } from './exerciceEscalade.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports : [TypeOrmModule.forFeature([ExerciceEscalade]),TypeOrmModule.forFeature([Seance]),TypeOrmModule.forFeature([User])],
  controllers: [ExerciceEscaladeController],
  providers: [ExerciceEscaladeService]
})
export class ExerciceEscaladeModule {}
