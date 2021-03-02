import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
    @ApiProperty({
        type: String,
        description: 'The name of the category position',
        default: '',
    })
    readonly name: string;

    @ApiProperty({
        type: String,
        description: 'The description of the category position',
        default: '',
    })
    readonly description: string;
}