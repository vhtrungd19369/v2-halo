import { ApiProperty } from '@nestjs/swagger';

export class CreateImportDto {
  @ApiProperty({
    type: String,
    description: 'The Id_employees of the CreateImportDto position',
    default: '',
  })
  Id_employees?: string;

  @ApiProperty({
    type: String,
    description: 'The contract of the CreateImportDto position',
    default: '',
  })
  contract: number;

  @ApiProperty({
    type: String,
    description: 'The date of the CreateImportDto position',
    default: '',
  })
  date: number;

  @ApiProperty({
    type: String,
    description: 'The description of the CreateImportDto position',
    default: '',
  })
  description: string;
}
