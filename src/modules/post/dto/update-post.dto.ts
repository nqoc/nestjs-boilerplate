import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePostDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  category?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;
}

// la 1 DTO (Data Transfer Object) de cap nhat mot bai viet, bao gom cac thuoc tinh title, category va description. Su dung cac decorator IsString, IsNotEmpty va IsOptional de validate cac thuoc tinh nay.
