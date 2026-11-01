import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

// la 1 DTO (Data Transfer Object) de tao mot bai viet moi, bao gom cac thuoc tinh title, category va description. Su dung cac decorator IsString va IsNotEmpty de validate cac thuoc tinh nay.
