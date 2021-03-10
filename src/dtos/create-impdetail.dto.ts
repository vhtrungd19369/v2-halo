import { ApiProperty } from '@nestjs/swagger';

export class CreateImpDetailDto {
  // @ApiProperty({
  //   type: String,
  //   description: 'The Id_import of the CreateImpDetailDto position',
  //   default: '',
  // })
  // Id_import: string;
  //
  // @ApiProperty({
  //   type: String,
  //   description: 'The Id_import of the CreateImpDetailDto position',
  //   default: '',
  // })
  // Id_product: string;

  @ApiProperty({
    type: String,
    description: 'The quantity of the CreateImpDetailDto position',
    default: '',
  })
  quantity: number;

  @ApiProperty({
    type: String,
    description: 'The unit of the CreateImpDetailDto position',
    default: '',
  })
  unit: string;
}
