import { Module } from '@nestjs/common';
import { ExerciceEscaladeController } from './exercice-escalade.controller';
import { ExerciceEscaladeService } from './exercice-escalade.service';

@Module({
  controllers: [ExerciceEscaladeController],
  providers: [ExerciceEscaladeService]
})
export class ExerciceEscaladeModule {}
