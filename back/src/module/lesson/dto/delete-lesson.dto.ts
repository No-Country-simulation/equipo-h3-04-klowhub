import { IsNotEmpty, IsUUID } from 'class-validator';

export class DeleteLessonDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
