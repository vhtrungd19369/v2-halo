import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ type: String, description: 'categoryID' })
  readonly categoryID: string;

  @IsEmail()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @ApiProperty({ type: String, description: 'name' })
  name: string;

  @ApiProperty({ type: String, description: 'description' })
  readonly description: string;

  @ApiProperty({ type: Number, description: 'price' })
  readonly price: number;
}
