import { ApiProperty } from '@nestjs/swagger';

export class CreateExportDto {
  @ApiProperty({ type: String, description: '', default: '' })
  readonly employeesID: string;

  @ApiProperty({ type: Number, description: '', default: '' })
  readonly contract: number;

  @ApiProperty({
    type: Number,
    description: '',
    default: Date.now(),
  })
  readonly date: number = Date.now();

  @ApiProperty({ type: String, description: '', default: '' })
  readonly description: string;
}
