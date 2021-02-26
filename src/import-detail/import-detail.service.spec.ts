import { Test, TestingModule } from '@nestjs/testing';
import { ImportDetailService } from './import-detail.service';

describe('ImportDetailService', () => {
  let service: ImportDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImportDetailService],
    }).compile();

    service = module.get<ImportDetailService>(ImportDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
