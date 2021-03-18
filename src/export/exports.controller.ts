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
import { ExportsService } from './exports.service';
import { ExportInterface } from './interfaces/export.interface';
import { CreateExportDto } from './dtos/create-export.dto';

@Controller('export')
@ApiTags('Export')
export class ExportsController {
  constructor(private readonly exportService: ExportsService) {}

  @Get()
  async findAll(): Promise<ExportInterface[]> {
    return await this.exportService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ExportInterface> {
    return await this.exportService.findOne(id);
  }

  @Post()
  async create(
    @Body() createExportDto: CreateExportDto,
  ): Promise<ExportInterface> {
    return await this.exportService.create(createExportDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ExportInterface> {
    return await this.exportService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCreateDto: CreateExportDto,
  ): Promise<ExportInterface> {
    return await this.exportService.update(id, updateCreateDto);
  }
}
