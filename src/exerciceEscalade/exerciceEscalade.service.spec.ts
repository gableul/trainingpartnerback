import { Test, TestingModule } from '@nestjs/testing';
import { ExerciceEscaladeService } from './exerciceEscalade.service';

describe('ExerciceEscaladeService', () => {
  let service: ExerciceEscaladeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciceEscaladeService],
    }).compile();

    service = module.get<ExerciceEscaladeService>(ExerciceEscaladeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
