import { ApiProperty } from '@nestjs/swagger';

export class CreateExportDetailDto {
  @ApiProperty({ type: String, description: '', default: '' })
  readonly exportId: string;

  @ApiProperty({ type: String, description: '', default: '' })
  readonly productId: string;

  @ApiProperty({ type: Number, description: '', default: '' })
  readonly quantity: number;

  @ApiProperty({ type: String, description: '', default: '' })
  readonly unit: string;
}
