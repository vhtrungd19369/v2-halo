import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  // @ApiProperty({
  //   type: String,
  //   description: 'The categoryID of the Product position',
  //   default: '',
  // })
  // readonly Id_category: string;

  @ApiProperty({
  //   type: String,
  //   description: 'The name of the Product position',
  //   default: '',
  })
  readonly name: string;

  @ApiProperty({
  //   type: String,
  //   description: 'The description of the Product position',
  //   default: '',
  })
  readonly description: string;

  @ApiProperty({
  //   type: String,
  //   description: 'The price of the Product position',
  //   default: '',
  })
  readonly price: number;
}
