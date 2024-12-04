import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';

@Module({
  imports: [],
  providers: [UploadService],
  controllers: [],
  exports: [UploadService],
})
export class UploadModule {}
