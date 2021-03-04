import { ApiProperty } from "@nestjs/swagger";

export class CreateExportDto {
    @ApiProperty({
        type: String,
        description: 'The Id_employees of the category position',
        default: '',
    })
    Id_employees: string;

    @ApiProperty({
        type: String,
        description: 'The contract of the category position',
        default: '',
    })
    contract: number;

    @ApiProperty({
        type: String,
        description: 'The date of the category position',
        default: '',
    })
    date: number;

    @ApiProperty({
        type: String,
        description: 'The description of the category position',
        default: '',
    })
    description: string;
}