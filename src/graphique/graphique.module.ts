import { Module } from '@nestjs/common';
import { GraphiqueController } from './graphique.controller';
import { GraphiqueService } from './graphique.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Graphique } from './graphique.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Graphique])],
  controllers: [GraphiqueController],
  providers: [GraphiqueService]
})
export class GraphiqueModule {}
