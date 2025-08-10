import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { RestaurantStatus } from '@prisma/client';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateRestaurantDto) {
    return this.prisma.restaurant.create({
      data,
    })
  }

  findAll({ page = 1, name }: { page?: number; name?: string }) {
    const take = 10;
    const skip = (page - 1) * take;
    return this.prisma.restaurant.findMany({
      skip,
      take,
      where: name ? { name: { contains: name } } : undefined,
    });
  }

  findOne(id: number) {
    return this.prisma.restaurant.findUnique({
      where: { id },
    });
  }

  update(id: number, data: UpdateRestaurantDto) {
    return this.prisma.restaurant.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.restaurant.delete({
      where: { id },
    });
  }
}
