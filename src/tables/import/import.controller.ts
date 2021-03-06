import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateImportDto } from 'src/dtos/create-import.dto';
import { ImportInterface } from 'src/interfaces/import.interface';
import { ImportService } from './import.service';

@Controller('import')
@ApiTags('Import')

export class ImportController {
    constructor( private readonly importService: ImportService) {}
        
    @Get()
    async findAll(): Promise<ImportInterface[]>{
        return await this.importService.findAll()
    }

    @Get(':Id_import')
    async findOne(@Param('Id_import')id: string): Promise<ImportInterface>{
        return await this.importService.findOne(id)
    }

    @Post()
    async create(@Body() createImportDto:CreateImportDto): Promise<ImportInterface>{
        return await this.importService.create(createImportDto)
    }

    @Delete(':Id_import')
    async delete(@Param('Id_import')id: string): Promise<ImportInterface>{
        return await this.importService.delete(id)
    }

    @Put(':Id_import')
    async update(@Param('Id_import')id: string, @Body() updateImportDto:CreateImportDto): Promise<ImportInterface>{
        return await this.importService.update(id, updateImportDto)
    }

}
