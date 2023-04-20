import { Test, TestingModule } from '@nestjs/testing';
import { ExerciceCourseService } from './exerciceCourse.service';

describe('ExerciceCourseService', () => {
  let service: ExerciceCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciceCourseService],
    }).compile();

    service = module.get<ExerciceCourseService>(ExerciceCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
