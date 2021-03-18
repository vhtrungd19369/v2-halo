import { ApiProperty } from '@nestjs/swagger';

export class CreateImportDetailDto {
  @ApiProperty({ type: String, description: 'importId' })
  readonly importId: string;

  @ApiProperty({ type: String, description: 'productId' })
  readonly productId: string;

  @ApiProperty({ type: Number, description: '' })
  readonly quantity: number;

  @ApiProperty({ type: String, description: 'unit' })
  readonly unit: string;
}
