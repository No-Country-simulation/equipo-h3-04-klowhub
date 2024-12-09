import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateLessonDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  video?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  translation?: string;

  @IsNotEmpty()
  @IsUUID()
  moduleId: string;
}
