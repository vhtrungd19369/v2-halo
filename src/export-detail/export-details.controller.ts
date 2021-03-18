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
import { ExportDetailsService } from './export-details.service';
import { ExportDetailInterface } from './interfaces/export-detail.interface';
import { CreateExportDetailDto } from './dtos/create-export-detail.dto';

@Controller('export-detail')
@ApiTags('ExportDetail')
export class ExportDetailsController {
  constructor(private readonly exportDetailService: ExportDetailsService) {}

  @Get()
  async findAll(): Promise<ExportDetailInterface[]> {
    return await this.exportDetailService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ExportDetailInterface> {
    return await this.exportDetailService.findOne(id);
  }

  @Post()
  async create(
    @Body() createExpDetailDto: CreateExportDetailDto,
  ): Promise<ExportDetailInterface> {
    return await this.exportDetailService.create(createExpDetailDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateExportDetailDto: CreateExportDetailDto,
  ): Promise<ExportDetailInterface> {
    return await this.exportDetailService.update(id, updateExportDetailDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ExportDetailInterface> {
    return await this.exportDetailService.delete(id);
  }
}
