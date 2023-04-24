import { Module } from '@nestjs/common';
import { DonneeGraphController } from './donneeGraph.controller';
import { DonneeGraphService } from './donneeGraph.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonneeGraph } from './donneeGraph.entity';
import { Graphique } from 'src/graphique/graphique.entity';
import { User } from 'src/user/user.entity';

@Module({
  imports : [TypeOrmModule.forFeature([DonneeGraph]),TypeOrmModule.forFeature([Graphique]),TypeOrmModule.forFeature([User])],
  controllers: [DonneeGraphController],
  providers: [DonneeGraphService]
})
export class DonneeGraphModule {}
