import { Test, TestingModule } from '@nestjs/testing';
import { GraphiqueController } from './graphique.controller';

describe('GraphiqueController', () => {
  let controller: GraphiqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GraphiqueController],
    }).compile();

    controller = module.get<GraphiqueController>(GraphiqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
