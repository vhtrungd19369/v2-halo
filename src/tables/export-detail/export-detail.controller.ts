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
import { ExportDetailService } from './export-detail.service';
import { ExportDetailInterface } from './interfaces/export-detail.interface';
import { CreateExportDetailDto } from './dtos/create-export-detail.dto';

@Controller('export-detail')
@ApiTags('ExportDetail')
export class ExportDetailController {
  constructor(private readonly expDetailService: ExportDetailService) {}

  @Get()
  async findAll(): Promise<ExportDetailInterface[]> {
    return await this.expDetailService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ExportDetailInterface> {
    return await this.expDetailService.findOne(id);
  }

  @Post()
  async create(
    @Body() createExpDetailDto: CreateExportDetailDto,
  ): Promise<ExportDetailInterface> {
    return await this.expDetailService.create(createExpDetailDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateExpDetailDto: CreateExportDetailDto,
  ): Promise<ExportDetailInterface> {
    return await this.expDetailService.update(id, updateExpDetailDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ExportDetailInterface> {
    return await this.expDetailService.delete(id);
  }
}
