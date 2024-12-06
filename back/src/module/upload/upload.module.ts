import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { SpeechModule } from 'src/common/service/speech/speech.module';
import { IdFinderModule } from 'src/common/service/idFinder/idfinder.module';
import { CourseModule } from '../course/course.module';
import { UploadService } from './upload.service';
import { UploadModule as UploadGoogle } from 'src/common/service/upload/upload.module';

@Module({
  imports: [SpeechModule, IdFinderModule, CourseModule, UploadGoogle],
  providers: [UploadService],
  controllers: [UploadController],
})
export class UploadModule {}
