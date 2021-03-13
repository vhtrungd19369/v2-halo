import { ApiProperty } from '@nestjs/swagger';

export class CreateImpDetailDto {
  @ApiProperty({ type: String, description: '', default: '' })
  readonly importID: string;

  @ApiProperty({ type: String, description: '', default: '' })
  readonly productID: string;

  @ApiProperty({ type: Number, description: '', default: '' })
  readonly quantity: number;

  @ApiProperty({ type: String, description: '', default: '' })
  readonly unit: string;
}
