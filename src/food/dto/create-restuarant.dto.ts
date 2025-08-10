import { RestuarantStatus } from '@prisma/client';
import { IsNotEmpty, IsUrl, IsEnum } from 'class-validator';

export class CreateRestuarantDto {
  @IsNotEmpty()
  name: string;
  @IsUrl()
  logo: string;
  @IsEnum(RestuarantStatus)
  status: RestuarantStatus;
}
