import { ApiProperty } from '@nestjs/swagger';

export class CreateImportDto {
  @ApiProperty({ type: String, description: 'employeesId' })
  readonly employeesId: string;

  @ApiProperty({ type: Number, description: '' })
  readonly contract: number;

  @ApiProperty({ type: Number, description: '' })
  readonly date: number;

  @ApiProperty({ type: String, description: 'description' })
  readonly description: string;
}
