import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  readonly category: string;

  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  readonly name: string;

  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  readonly description: string;

  @ApiProperty({
    type: Number,
    description: '',
    default: '',
  })
  readonly price: number;
}
