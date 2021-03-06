import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
 
    @ApiProperty({
        type: String,
        description: 'The name of the CreateCategoryDto position',
        default: '',
    })
    readonly name: string;

    @ApiProperty({
        type: String,
        description: 'The description of the CreateCategoryDto position',
        default: '',
    })
    readonly description: string;
}