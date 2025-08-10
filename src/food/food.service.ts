import { Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FoodService {
  constructor(private prisma: PrismaService) {}

  create({ restaurant, ...food }: CreateFoodDto) {
    return this.prisma.food.create({
      data: {
        ...food,
        restaurant: {
          create: restaurant,
        },
      },
    });
  }

  findAll({ page = 1 }: { page?: number }) {
    const take = 10;
    const skip = (page - 1) * take;
    return this.prisma.food.findMany({
      skip,
      take,
      include: { restaurant: true }, // include related restaurant
    });
  }

  findOne(id: number) {
    return this.prisma.food.findUnique({
      where: { id },
      include: { restaurant: true },
    });
  }

  update(id: number, updateFoodDto: UpdateFoodDto) {
    const { restaurant, ...food } = updateFoodDto;
    return this.prisma.food.update({
      where: { id },
      data: {
        ...food,
        ...(restaurant && {
          restaurant: {
            update: updateFoodDto.restaurant ?? {},
          },
        }),
      },
      include: { restaurant: true },
    });
  }

  remove(id: number) {
    return this.prisma.food.delete({
      where: { id },
    });
  }
}
