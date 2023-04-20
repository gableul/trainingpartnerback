import { Module } from '@nestjs/common';
import { ExerciceEscaladeController } from './exerciceEscalade.controller';
import { ExerciceEscaladeService } from './exerciceEscalade.service';

@Module({
  controllers: [ExerciceEscaladeController],
  providers: [ExerciceEscaladeService]
})
export class ExerciceEscaladeModule {}
