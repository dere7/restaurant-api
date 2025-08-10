import { IsNotEmpty, IsNumber, IsUrl, ValidateNested } from 'class-validator';
import { CreateRestaurantDto } from '../../restaurant/dto/create-restaurant.dto';
import { Type } from 'class-transformer';

export class CreateFoodDto {
  @IsNotEmpty()
  name: string;
  @IsNumber()
  rating: number;
  @IsUrl()
  image: string;

  @ValidateNested()
  @Type(() => CreateRestaurantDto)
  restaurant: CreateRestaurantDto;
}
