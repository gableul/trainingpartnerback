import { Module } from '@nestjs/common';
import { BattleController } from './battle.controller';
import { BattleService } from './battle.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonneeGraph } from 'src/donneeGraph/donneeGraph.entity';

@Module({
  imports : [TypeOrmModule.forFeature([DonneeGraph])],
  controllers: [BattleController],
  providers: [BattleService]
})
export class BattleModule {}
