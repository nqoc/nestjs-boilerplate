import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/typeorm/entities';
import { UserSeedService } from './user-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserSeedService],
  exports: [UserSeedService],
})
export class UserSeedModule {}

// seed data mau cho bang user trong database, bao gom cac cot id, email, password, first_name, last_name, created_at va updated_at. id la primary key va tu dong tang gia tri. email la mot chuoi ky tu co dinh dang email. password la mot chuoi ky tu. first_name va last_name la cac chuoi ky tu. created_at va updated_at la cac cot luu tru thoi gian tao va cap nhat cua ban ghi.
