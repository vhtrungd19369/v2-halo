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
import { CreateImpDetailDto } from 'src/dtos/create-impdetail.dto';
import { Imp_detailInterface } from 'src/interfaces/imp_detail.interface';
import { ImportDetailService } from './imp_detail.service';

@Controller('impdetail')
@ApiTags('ImpDetail')
export class ImportDetailController {
  constructor(private readonly impDetailService: ImportDetailService) {}

  @Get()
  async findAll(): Promise<Imp_detailInterface[]> {
    return await this.impDetailService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Imp_detailInterface> {
    return await this.impDetailService.findOne(id);
  }

  @Post()
  async create(
    @Body() createImpDetailDto: CreateImpDetailDto,
  ): Promise<Imp_detailInterface> {
    return await this.impDetailService.create(createImpDetailDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Imp_detailInterface> {
    return await this.impDetailService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCreateImpDetailDto: CreateImpDetailDto,
  ): Promise<Imp_detailInterface> {
    return await this.impDetailService.update(id, updateCreateImpDetailDto);
  }
}
