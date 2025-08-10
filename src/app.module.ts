import { Module } from '@nestjs/common';
import { FoodModule } from './food/food.module';
import { PrismaModule } from './prisma/prisma.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [FoodModule, PrismaModule, RestaurantModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
