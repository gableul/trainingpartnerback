import { Test, TestingModule } from '@nestjs/testing';
import { HebdomadaireService } from './hebdomadaire.service';

describe('HebdomadaireService', () => {
  let service: HebdomadaireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HebdomadaireService],
    }).compile();

    service = module.get<HebdomadaireService>(HebdomadaireService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
