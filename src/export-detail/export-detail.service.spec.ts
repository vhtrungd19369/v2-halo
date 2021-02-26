import { Test, TestingModule } from '@nestjs/testing';
import { ExportDetailService } from './export-detail.service';

describe('ExportDetailService', () => {
  let service: ExportDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExportDetailService],
    }).compile();

    service = module.get<ExportDetailService>(ExportDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
