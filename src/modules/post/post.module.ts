import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '@database/typeorm/entities/post.entity';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}

// la 1 module de quan ly cac request lien quan den bai viet, bao gom cac controller va service de xu ly cac request lien quan den bai viet.
// Module nay su dung TypeOrmModule de ket noi voi entity Post trong database.
