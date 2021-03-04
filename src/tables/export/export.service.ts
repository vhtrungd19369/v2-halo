import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { CreateExportDto } from 'src/dtos/create-export.dto';
import { ExportInterface } from 'src/interfaces/export.interface';

@Injectable()
export class ExportService {
    constructor(@InjectModel('Export') private readonly exportModel:Model<ExportInterface & Document>) {}

    async findAll(): Promise<ExportInterface[]> {
        return await this.exportModel.find();
    }

    async findOne(id: string): Promise<ExportInterface> {
        return await this.exportModel.findOne({ _id: id});
    }

    async create(createExportDto: CreateExportDto): Promise<ExportInterface> {
        const newExp = new this.exportModel(createExportDto);

        return await newExp.save();
    }

    async delete(id: string): Promise<ExportInterface> {
        return await this.exportModel.findByIdAndUpdate(id);
    }

    async update(id: string, exportInterface: ExportInterface): Promise<ExportInterface> {
        return await this.exportModel.findByIdAndUpdate(id, exportInterface, {new: true});
    }

}

