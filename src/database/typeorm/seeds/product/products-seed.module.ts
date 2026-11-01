import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSeedService } from './products-seed.service';
import { Product } from '@database/typeorm/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductSeedService],
  exports: [ProductSeedService],
})
export class ProductSeedModule {}

// seed data mau cho bang product trong database, bao gom cac cot id, name,
// description, price, created_at va updated_at. id la primary key va tu dong tang gia tri.
// name la mot chuoi ky tu. description la mot chuoi ky tu. price la mot so thuc. created_at
// va updated_at la cac cot luu tru thoi gian tao va cap nhat cua ban ghi.

// seed dung de tao du lieu mau cho bang product trong database, giup cho viec test va phat trien ung dung de dang hon.
