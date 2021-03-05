import { ApiProperty } from "@nestjs/swagger";

export class CreateExpDetailDto {
    @ApiProperty({
        type: String,
        description: 'The Id_emport of the category position',
        default: '',
    })
    Id_emport?: string;

    @ApiProperty({
        type: String,
        description: 'The Id_product of the category position',
        default: '',
    })
    Id_product?: string;

    @ApiProperty({
        type: String,
        description: 'The quantity of the category position',
        default: '',
    })
    quantity: number;
    
    @ApiProperty({
        type: String,
        description: 'The unit of the category position',
        default: '',
    })
    unit: string;
}