import { ApiProperty } from '@nestjs/swagger';

export class CreateExportDto {
  @ApiProperty({ type: String, description: 'string' })
  readonly employeesId: string;

  @ApiProperty({ type: Number, description: '' })
  readonly contract: number;

  @ApiProperty({ type: Number, description: '' })
  readonly date: number;

  @ApiProperty({ type: String, description: 'description' })
  readonly description: string;
}
