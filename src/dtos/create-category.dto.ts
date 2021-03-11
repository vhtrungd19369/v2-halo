import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
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
}
