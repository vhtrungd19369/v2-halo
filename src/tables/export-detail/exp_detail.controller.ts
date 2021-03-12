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
import { CreateExpDetailDto } from 'src/dtos/create-expdetail.dto';
import { Exp_detailInterface } from 'src/interfaces/exp_detail.interface';
import { ExportDetailService } from './exp_detail.service';

@Controller('expdetail')
@ApiTags('ExpDetail')
export class ExportDetailController {
  constructor(private readonly expDetailService: ExportDetailService) {}

  @Get()
  async findAll(): Promise<Exp_detailInterface[]> {
    return await this.expDetailService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Exp_detailInterface> {
    return await this.expDetailService.findOne(id);
  }

  @Post()
  async careate(
    @Body() createExpDetailDto: CreateExpDetailDto,
  ): Promise<Exp_detailInterface> {
    return await this.expDetailService.create(createExpDetailDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateExpDetailDto: CreateExpDetailDto,
  ): Promise<Exp_detailInterface> {
    return await this.expDetailService.update(id, updateExpDetailDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Exp_detailInterface> {
    return await this.expDetailService.delete(id);
  }
}
