import { ApiProperty } from '@nestjs/swagger';

export class CreateExportDto {
  @ApiProperty({ type: String, description: '', default: '' })
  readonly employeesID: string;

  @ApiProperty({
    type: Number,
    description: '',
    default: '',
  })
  contract: number;

  @ApiProperty({
    type: Number,
    description: '',
    default: Date.now(),
  })
  date: number = Date.now();

  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  description: string;
}
