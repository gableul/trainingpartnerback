import { Module } from '@nestjs/common';
import { ExerciceMusculationService } from './exercice-musculation.service';

@Module({
  providers: [ExerciceMusculationService]
})
export class ExerciceMusculationModule {}
