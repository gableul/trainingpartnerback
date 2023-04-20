import { Test, TestingModule } from '@nestjs/testing';
import { ExerciceCourseController } from './exerciceCourse.controller';

describe('ExerciceCourseController', () => {
  let controller: ExerciceCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciceCourseController],
    }).compile();

    controller = module.get<ExerciceCourseController>(ExerciceCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
