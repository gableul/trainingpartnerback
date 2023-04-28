import { Module } from '@nestjs/common';
import { SeanceController } from './seance.controller';
import { SeanceService } from './seance.service';
import { Seance } from './seance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Seance]),TypeOrmModule.forFeature([User])],
  controllers: [SeanceController],
  providers: [SeanceService]
})
export class SeanceModule {}
