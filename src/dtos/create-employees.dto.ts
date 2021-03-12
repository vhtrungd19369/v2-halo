import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeesDto {
  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  readonly name: string;

  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  readonly mail: string;

  @ApiProperty({
    type: Number,
    description: '',
    default: '',
  })
  readonly phone: number;

  @ApiProperty({
    type: String,
    description: '',
    default: '',
  })
  readonly gender: string;
}
