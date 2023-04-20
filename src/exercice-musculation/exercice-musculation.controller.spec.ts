import { Test, TestingModule } from '@nestjs/testing';
import { ExerciceMusculationController } from './exercice-musculation.controller';

describe('ExerciceMusculationController', () => {
  let controller: ExerciceMusculationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciceMusculationController],
    }).compile();

    controller = module.get<ExerciceMusculationController>(ExerciceMusculationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
