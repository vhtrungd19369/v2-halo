import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ImportDetailService } from './import-detail.service';
import { ImportDetailInterface } from './interfaces/import-detail.interface';
import { CreateImportDetailDto } from './dtos/create-import-detail.dto';

@Controller('import-detail')
@ApiTags('ImportDetail')
export class ImportDetailController {
  constructor(private readonly importDetailService: ImportDetailService) {}

  @Get()
  async findAll(): Promise<ImportDetailInterface[]> {
    return await this.importDetailService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ImportDetailInterface> {
    return await this.importDetailService.findOne(id);
  }

  @Post()
  async create(
    @Body() createImportDetailDto: CreateImportDetailDto,
  ): Promise<ImportDetailInterface> {
    return await this.importDetailService.create(createImportDetailDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ImportDetailInterface> {
    return await this.importDetailService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCreateImpDetailDto: CreateImportDetailDto,
  ): Promise<ImportDetailInterface> {
    return await this.importDetailService.update(id, updateCreateImpDetailDto);
  }
}
