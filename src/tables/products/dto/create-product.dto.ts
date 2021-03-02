import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    // @ApiProperty({
    //     type: String,
    //     description: 'The name of the product position',
    //     default: '',
    // })
    // readonly Id_category: string;

    @ApiProperty({
        type: String,
        description: 'The name of the product position',
        default: '',
    })
    readonly name: string;

    @ApiProperty({
        type: String,
        description: 'The description of the product position',
        default: '',
    })
    readonly description: string;

}