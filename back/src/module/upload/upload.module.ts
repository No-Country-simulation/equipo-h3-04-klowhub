import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { LessonModule } from '../lesson/lesson.module';
import { SpeechModule } from 'src/common/service/speech/speech.module';

@Module({
  imports: [LessonModule, SpeechModule],
  controllers: [UploadController],
})
export class UploadModule {}
