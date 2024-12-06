import { PartialType } from '@nestjs/swagger';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateCourseDto } from './create.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Title of the course',
    example: 'Introduction to AppSheet Development',
    maxLength: 255,
  })
  title?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Short description of the course',
    example: 'Learn how to create apps using AppSheet efficiently.',
    maxLength: 600,
  })
  description?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'URL de la imagen de portada del curso',
    example: 'https://example.com/image.jpg',
  })
  coverImage?: string;
}
