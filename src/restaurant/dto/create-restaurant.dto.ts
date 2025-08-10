import { RestaurantStatus } from '@prisma/client';
import { IsNotEmpty, IsUrl, IsEnum } from 'class-validator';

export class CreateRestaurantDto {
  @IsNotEmpty()
  name: string;
  @IsUrl()
  logo: string;
  @IsEnum(RestaurantStatus)
  status: RestaurantStatus;
}
