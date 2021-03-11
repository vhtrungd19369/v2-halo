import { ApiProperty } from '@nestjs/swagger';

export class CreateImpDetailDto {
  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  readonly import: string;

  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  readonly product: string;

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

