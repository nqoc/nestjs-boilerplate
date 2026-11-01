import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '@database/typeorm/entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostResponse } from './response/post.response';

@Injectable()
export class PostService {
  // la 1 service de quan ly cac thao tac lien quan den bai viet, bao gom cac phuong thuc de lay tat ca cac bai viet, tao mot bai viet moi, cap nhat mot bai viet va xoa mot bai viet.
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<PostResponse[]> {
    // la 1 phuong thuc de lay tat ca cac bai viet, tra ve mot mang cac doi tuong PostResponse. doi tuong PostResponse la mot class dung de chuyen doi du lieu tu entity Post sang mot dinh dang khac de tra ve cho client.
    const posts = await this.postRepository.find({
      order: { createdAt: 'DESC' },
    });
    return posts.map((post) => new PostResponse(post));
  }

  async create(createPostDto: CreatePostDto): Promise<PostResponse> {
    const post = this.postRepository.create(createPostDto);
    return new PostResponse(await this.postRepository.save(post));
  }
  // la 1 phuong thuc de cap nhat mot bai viet, nhan vao id cua bai viet can cap nhat va du lieu cap nhat. Tra ve doi tuong PostResponse sau khi cap nhat thanh cong.
  async update(
    id: number,
    updatePostDto: UpdatePostDto,
  ): Promise<PostResponse> {
    const post = await this.findOne(id);
    Object.assign(post, updatePostDto);
    return new PostResponse(await this.postRepository.save(post));
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.postRepository.softDelete(id);
  }

  private async findOne(id: number): Promise<Post> {
    // la 1 phuong thuc de tim mot bai viet theo id, neu khong tim thay thi nem ra loi NotFoundException. Tra ve doi tuong Post neu tim thay.
    const post = await this.postRepository.findOneBy({ id });

    if (!post) {
      throw new NotFoundException('POST-0001');
    }

    return post;
  }
}
