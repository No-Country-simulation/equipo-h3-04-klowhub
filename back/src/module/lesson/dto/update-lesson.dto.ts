import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonDto } from './create-lesson.dto';
import { IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class UpdateLessonDto extends PartialType(CreateLessonDto) {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  video?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  translation?: string;

  @IsOptional()
  @IsUUID()
  moduleId?: string;
}
