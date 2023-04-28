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

  describe  ('FindAll', () => {
    it ('should return le muscle le moins travaillé ', async()=>{
      const res = await service.getLessWorkedMuscle();
      expect(typeof res).toBe('string');
    })
  })
});
