import { Test, TestingModule } from '@nestjs/testing';
import { ImportDetailController } from './import-detail.controller';

describe('ImportDetailController', () => {
  let controller: ImportDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImportDetailController],
    }).compile();

    controller = module.get<ImportDetailController>(ImportDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
