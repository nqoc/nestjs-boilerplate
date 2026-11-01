import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post as PostMethod,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'; // khai bao cac thu vien can thiet
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@ApiTags('posts')
@Controller('v1/post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  // la 1 controller de quan ly cac request lien quan den bai viet, bao gom cac phuong thuc de lay tat ca cac bai viet, tao mot bai viet moi, cap nhat mot bai viet va xoa mot bai viet.

  @Get()
  @ApiOperation({ summary: 'Get all posts' }) // khai bao mot API endpoint de lay tat ca cac bai viet, su dung phuong thuc GET va duong dan la /v1/post. ApiOperation dung de mo ta API endpoint trong Swagger documentation. ApiResponse dung de mo ta ket qua tra ve cua API endpoint trong Swagger documentation.
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Posts retrieved successfully',
  })
  findAll() {
    return this.postService.findAll();
  }

  @PostMethod()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a post' }) // khai bao api endpoint de tao mot bai viet, su dung phuong thuc POST va duong dan la /v1/post. ApiOperation dung de mo ta API endpoint trong Swagger documentation. ApiResponse dung de mo ta ket qua tra ve cua API endpoint trong Swagger documentation.
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Post created successfully',
  })
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a post' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Post updated successfully',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a post' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Post deleted successfully',
  })
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.postService.remove(id);
  }
}
