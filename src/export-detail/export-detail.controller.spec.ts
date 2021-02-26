import { Test, TestingModule } from '@nestjs/testing';
import { ExportDetailController } from './export-detail.controller';

describe('ExportDetailController', () => {
  let controller: ExportDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExportDetailController],
    }).compile();

    controller = module.get<ExportDetailController>(ExportDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
