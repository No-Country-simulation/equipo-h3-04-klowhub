import { Controller, Post } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('lesson')
@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Post()
  async create() {
    return await this.lessonService.create();
  }
}
