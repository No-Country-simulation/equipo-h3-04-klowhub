import { IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateModuleDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsUUID()
  courseId: string;
}
