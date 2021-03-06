import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateImpDetailDto } from 'src/dtos/create-impdetail.dto';
import { ImpDetailInterface } from 'src/interfaces/impdetail.interface';
import { ImportDetailService } from './imp_detail.service';

@Controller('impdetail')
@ApiTags('ImpDetail')

export class ImportDetailController {
    constructor(private readonly impDetailService:ImportDetailService) {}

    @Get()
    async findAll(): Promise<ImpDetailInterface[]> {
        return await this.impDetailService.findAll();
    }

    @Get(':Id_impDetail')
    async findOne(@Param('Id_impDetail')id: string): Promise<ImpDetailInterface> {
        return await this.impDetailService.findOne(id);
    }

    @Post()
    async create(@Body() createImpDetailDto: CreateImpDetailDto): Promise<ImpDetailInterface> {
        return await this.impDetailService.create(createImpDetailDto);
    }

    @Delete(':Id_impDetail')
    async delete(@Param('Id_impDetail')id: string): Promise<ImpDetailInterface> {
        return await this.impDetailService.delete(id);
    }

    @Put(':Id_impDetail')
    async update(@Param('Id_impDetail')id: string, @Body() updateCreateImpDetailDto: CreateImpDetailDto): Promise<ImpDetailInterface>{
        return await this.impDetailService.update(id, updateCreateImpDetailDto);
    }

}
