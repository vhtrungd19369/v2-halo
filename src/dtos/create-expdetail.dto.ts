import { ApiProperty } from '@nestjs/swagger';

export class CreateExpDetailDto {
  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  readonly exportID: string;

  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  readonly productID: string;

  @ApiProperty({
    type: Number,
    description: '',
    default: '',
  })
  readonly quantity: number;

  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  readonly unit: string;
}
