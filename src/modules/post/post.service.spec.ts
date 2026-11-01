import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Post } from '@database/typeorm/entities/post.entity';
import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;
  const repository = {
    create: jest.fn(),
    find: jest.fn(),
    findOneBy: jest.fn(),
    save: jest.fn(),
    softDelete: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostService,
        { provide: getRepositoryToken(Post), useValue: repository },
      ],
    }).compile();

    service = module.get<PostService>(PostService);
  });

  it('creates a post', async () => {
    const dto = {
      title: 'Title',
      category: 'News',
      description: 'Description',
    };
    const post = {
      id: 1,
      ...dto,
      createdAt: new Date(),
      deletedAt: null,
    };
    repository.create.mockReturnValue(post);
    repository.save.mockResolvedValue(post);

    await expect(service.create(dto)).resolves.toEqual({
      id: post.id,
      ...dto,
      created_at: post.createdAt,
      deleted_at: null,
    });
    expect(repository.create).toHaveBeenCalledWith(dto);
    expect(repository.save).toHaveBeenCalledWith(post);
  });

  it('soft-deletes an existing post', async () => {
    repository.findOneBy.mockResolvedValue({ id: 1 });
    repository.softDelete.mockResolvedValue({ affected: 1 });

    await service.remove(1);

    expect(repository.softDelete).toHaveBeenCalledWith(1);
  });

  it('throws when updating a missing post', async () => {
    repository.findOneBy.mockResolvedValue(null);

    await expect(
      service.update(1, { title: 'Updated' }),
    ).rejects.toBeInstanceOf(NotFoundException);
  });
});
