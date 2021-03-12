import { ApiProperty } from '@nestjs/swagger';

export class CreateExportDto {
  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
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
    default: '',
  })
  date: number;

  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  description: string;
}
