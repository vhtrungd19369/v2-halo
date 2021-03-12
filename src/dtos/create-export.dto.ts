import { ApiProperty } from '@nestjs/swagger';

export class CreateExportDto {
  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  Id_employees: string;

  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  contract: number;

  @ApiProperty({
    type: String,
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
