import { IsNotEmpty, IsNumber, IsUrl, ValidateNested } from 'class-validator';
import { CreateRestuarantDto } from './create-restuarant.dto';
import { Type } from 'class-transformer';

export class CreateFoodDto {
  @IsNotEmpty()
  name: string;
  @IsNumber()
  rating: number;
  @IsUrl()
  image: string;

  @ValidateNested()
  @Type(() => CreateRestuarantDto)
  restaurant: CreateRestuarantDto;
}
