import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({
        type: String,
        description: 'The Id_category of the CreateProductDto position',
        default: '',
    })
    readonly Id_category: string;

    @ApiProperty({
        type: String,
        description: 'The name of the CreateProductDto position',
        default: '',
    })
    readonly name: string;

    @ApiProperty({
        type: String,
        description: 'The description of the CreateProductDto position',
        default: '',
    })
    readonly description: string;

}