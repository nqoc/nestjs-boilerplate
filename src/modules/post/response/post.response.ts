import { Post } from '@database/typeorm/entities/post.entity';

export class PostResponse {
  id: number;
  title: string;
  category: string;
  description: string;
  created_at: Date;
  deleted_at: Date | null;

  constructor(post: Post) {
    this.id = post.id;
    this.title = post.title;
    this.category = post.category;
    this.description = post.description;
    this.created_at = post.createdAt;
    this.deleted_at = post.deletedAt;
  }
}

// la 1 class dung de chuyen doi du lieu tu entity Post sang mot dinh dang khac de tra ve cho client.
//  Class nay bao gom cac thuoc tinh id, title, category, description, created_at va deleted_at.
// Constructor nhan vao mot doi tuong Post va gan cac gia tri cua cac thuoc tinh tu doi tuong Post sang cac thuoc tinh cua class PostResponse.
