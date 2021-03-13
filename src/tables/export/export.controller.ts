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
import { CreateExportDto } from 'src/dtos/create-export.dto';
import { ExportInterface } from 'src/interfaces/export.interface';
import { ExportService } from './export.service';

@Controller('export')
@ApiTags('Export')
export class ExportController {
  constructor(private readonly exportService: ExportService) {}

  @Get()
  async findAll(): Promise<ExportInterface[]> {
    return await this.exportService.findAll();
  }

  @Get(':id_export')
  async findOne(@Param('id_export') id: string): Promise<ExportInterface> {
    return await this.exportService.findOne(id);
  }

  @Post()
  async create(
    @Body() createExportDto: CreateExportDto,
  ): Promise<ExportInterface> {
    return await this.exportService.create(createExportDto);
  }

  // @Delete(':id')
  // async delete(@Param('id') id: string): Promise<ExportInterface> {
  //   return await this.exportService.delete(id);
  // }

  @Delete(':id_export')
  async delete(@Param('id_export') id: string): Promise<ExportInterface> {
    return await this.exportService.delete(id);
  }

  @Put(':id_export')
  async update(
    @Param('id_export') id: string,
    @Body() updateCreateDto: CreateExportDto,
  ): Promise<ExportInterface> {
    return await this.exportService.update(id, updateCreateDto);
  }
}
