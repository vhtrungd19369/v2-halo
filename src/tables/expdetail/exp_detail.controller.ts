import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateExpDetailDto } from 'src/dtos/create-expdetail.dto';
import { ExpDetailInterface } from 'src/interfaces/expdetail.interface';
import { ExportDetailService } from './exp_detail.service';

@Controller('Expdetail')
@ApiTags('Expdetail')

export class ExportDetailController {
    constructor( private readonly expDetailService: ExportDetailService) {}

    @Get()
    async findAll(): Promise<ExpDetailInterface[]> {
        return await this.expDetailService.findAll();
    }

    @Get(':Id_expDetail')
    async findOne(@Param('Id_expDetail')id: string): Promise<ExpDetailInterface> {
        return await this.expDetailService.findOne(id);
    }

    @Post()
    async careate(@Body() createExpDetailDto:CreateExpDetailDto): Promise<ExpDetailInterface> {
        return await this.expDetailService.create(createExpDetailDto);
    }

    @Put(':Id_expDetail')
    async update(@Param('Id_expDetail')id: string, @Body() updateExpDetailDto:CreateExpDetailDto): Promise<ExpDetailInterface> {
        return await this.expDetailService.update(id, updateExpDetailDto);
    }

    @Delete(':Id_expDetail')
    async delete(@Param('Id_expDetail')id: string): Promise<ExpDetailInterface> {
        return await this.expDetailService.delete(id);
    }

}
