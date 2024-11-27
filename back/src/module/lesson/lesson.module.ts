import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { UploadModule } from 'src/common/service/upload/upload.module';
import { SpeechModule } from 'src/common/service/speech/speech.module';

@Module({
  imports: [UploadModule, SpeechModule],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
