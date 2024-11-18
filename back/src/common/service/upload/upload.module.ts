import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [],
  providers: [UploadService],
  controllers: [],
  exports: [UploadService],
})
export class UploadModule {}
