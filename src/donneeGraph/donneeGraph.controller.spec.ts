import { Test, TestingModule } from '@nestjs/testing';
import { DonneeGraphController } from './donneeGraph.controller';

describe('DonneeGraphController', () => {
  let controller: DonneeGraphController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonneeGraphController],
    }).compile();

    controller = module.get<DonneeGraphController>(DonneeGraphController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
