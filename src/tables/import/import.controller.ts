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
import { CreateImportDto } from 'src/dtos/create-import.dto';
import { ImportInterface } from 'src/interfaces/import.interface';
import { ImportService } from './import.service';

@Controller('import')
@ApiTags('Import')
export class ImportController {
  constructor(private readonly importService: ImportService) {}

  @Get()
  async findAll(): Promise<ImportInterface[]> {
    return await this.importService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ImportInterface> {
    return await this.importService.findOne(id);
  }

  @Post()
  async create(
    @Body() createImportDto: CreateImportDto,
  ): Promise<ImportInterface> {
    return await this.importService.create(createImportDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<ImportInterface> {
    return await this.importService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateImportDto: CreateImportDto,
  ): Promise<ImportInterface> {
    return await this.importService.update(id, updateImportDto);
  }
}
