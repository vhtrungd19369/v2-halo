import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({ type: String, description: 'name' })
  readonly name: string;

  @ApiProperty({ type: String, description: 'mail' })
  readonly mail: string;

  @ApiProperty({ type: Number, description: '' })
  readonly phone: number;

  @ApiProperty({ type: String, description: 'gender' })
  readonly gender: string;
}
