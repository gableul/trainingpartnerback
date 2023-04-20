import { Test, TestingModule } from '@nestjs/testing';
import { ExerciceMusculationService } from './exerciceMusculation.service';

describe('ExerciceMusculationService', () => {
  let service: ExerciceMusculationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciceMusculationService],
    }).compile();

    service = module.get<ExerciceMusculationService>(ExerciceMusculationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
