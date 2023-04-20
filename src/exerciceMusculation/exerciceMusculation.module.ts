import { Module } from '@nestjs/common';
import { ExerciceMusculationService } from './exerciceMusculation.service';

@Module({
  providers: [ExerciceMusculationService]
})
export class ExerciceMusculationModule {}
