import { Test, TestingModule } from '@nestjs/testing';
import { DonneeGraphService } from './donneeGraph.service';

describe('DonneeGraphService', () => {
  let service: DonneeGraphService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonneeGraphService],
    }).compile();

    service = module.get<DonneeGraphService>(DonneeGraphService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
