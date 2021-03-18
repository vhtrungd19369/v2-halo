import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ type: String, description: 'name' })
  readonly name: string;

  @ApiProperty({ type: String, description: 'description' })
  readonly description: string;
}
