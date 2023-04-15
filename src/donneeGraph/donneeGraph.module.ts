import { Module } from '@nestjs/common';
import { DonneeGraphController } from './donneeGraph.controller';
import { DonneeGraphService } from './donneeGraph.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonneeGraph } from './donneeGraph.entity';

@Module({
  imports : [TypeOrmModule.forFeature([DonneeGraph])],
  controllers: [DonneeGraphController],
  providers: [DonneeGraphService]
})
export class DonneeGraphModule {}
