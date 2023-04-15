import { Test, TestingModule } from '@nestjs/testing';
import { GraphiqueService } from './graphique.service';

describe('GraphiqueService', () => {
  let service: GraphiqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphiqueService],
    }).compile();

    service = module.get<GraphiqueService>(GraphiqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
