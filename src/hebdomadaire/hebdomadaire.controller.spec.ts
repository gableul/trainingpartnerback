import { Test, TestingModule } from '@nestjs/testing';
import { HebdomadaireController } from './hebdomadaire.controller';

describe('HebdomadaireController', () => {
  let controller: HebdomadaireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HebdomadaireController],
    }).compile();

    controller = module.get<HebdomadaireController>(HebdomadaireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
