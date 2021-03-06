import { ApiProperty } from "@nestjs/swagger";

export class CreateExportDto {
    @ApiProperty({
        type: String,
        description: 'The Id_employees of the CreateExportDto position',
        default: '',
    })
    Id_employees: string;

    @ApiProperty({
        type: String,
        description: 'The contract of the CreateExportDto position',
        default: '',
    })
    contract: number;

    @ApiProperty({
        type: String,
        description: 'The date of the CreateExportDto position',
        default: '',
    })
    date: number;

    @ApiProperty({
        type: String,
        description: 'The description of the CreateExportDto position',
        default: '',
    })
    description: string;
}