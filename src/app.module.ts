import { Module } from '@nestjs/common';
import { FoodModule } from './food/food.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FoodModule, PrismaModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
