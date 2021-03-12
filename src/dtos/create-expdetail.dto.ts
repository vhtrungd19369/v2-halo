import { ApiProperty } from '@nestjs/swagger';

export class CreateExpDetailDto {
  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  Id_emport?: string;

  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  Id_product?: string;

  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  quantity: number;

  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  unit: string;
}
