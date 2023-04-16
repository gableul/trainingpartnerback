import { Module } from '@nestjs/common';
import { HebdomadaireController } from './hebdomadaire.controller';
import { HebdomadaireService } from './hebdomadaire.service';

@Module({
  controllers: [HebdomadaireController],
  providers: [HebdomadaireService]
})
export class HebdomadaireModule {}
