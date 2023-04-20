import { Test, TestingModule } from '@nestjs/testing';
import { ExerciceEscaladeController } from './exercice-escalade.controller';

describe('ExerciceEscaladeController', () => {
  let controller: ExerciceEscaladeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciceEscaladeController],
    }).compile();

    controller = module.get<ExerciceEscaladeController>(ExerciceEscaladeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
