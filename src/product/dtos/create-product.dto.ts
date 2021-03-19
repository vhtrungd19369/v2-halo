import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ type: String, description: 'categoryId' })
  readonly categoryId: string;

  @ApiProperty({ type: String, description: 'name' })
  name: string;

  @ApiProperty({ type: String, description: 'description' })
  readonly description: string;

  @ApiProperty({ type: Number, description: '' })
  readonly price: number;
}
