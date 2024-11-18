import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { UploadModule } from 'src/common/service/upload/upload.module';

@Module({
  imports: [UploadModule],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
