import { ApiProperty } from "@nestjs/swagger";

export class CreateEmployeesDto {
 
    @ApiProperty({
        type: String,
        description: 'The name of the category position',
        default: '',
    })
    readonly name: string;

    @ApiProperty({
        type: String,
        description: 'The mail of the category position',
        default: '',
    })
    readonly mail: string;

    @ApiProperty({
        type: Number,
        description: 'The phone of the category position',
        default: '',
    })
    readonly phone: number;

    @ApiProperty({
        type: String,
        description: 'The gender of the category position',
        default: '',
    })
    readonly gender: string;
}