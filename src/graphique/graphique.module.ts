import { Module } from '@nestjs/common';
import { GraphiqueController } from './graphique.controller';
import { GraphiqueService } from './graphique.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Graphique } from './graphique.entity';
import { User } from 'src/user/user.entity';
import { DonneeGraph } from 'src/donneeGraph/donneeGraph.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Graphique]),TypeOrmModule.forFeature([User]),TypeOrmModule.forFeature([DonneeGraph])],
  controllers: [GraphiqueController],
  providers: [GraphiqueService]
})
export class GraphiqueModule {}
