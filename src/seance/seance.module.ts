import { Module } from '@nestjs/common';
import { SeanceController } from './seance.controller';
import { SeanceService } from './seance.service';
import { Seance } from './seance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([Seance])],
  controllers: [SeanceController],
  providers: [SeanceService]
})
export class SeanceModule {}
