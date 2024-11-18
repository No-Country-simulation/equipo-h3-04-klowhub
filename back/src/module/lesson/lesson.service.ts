import { Injectable } from '@nestjs/common';
import { UploadService } from 'src/common/service/upload/upload.service';

@Injectable()
export class LessonService {
  constructor(private readonly uploadService: UploadService) {}

  async create(file: any) {
    try {
      // lo que respondemos aca guardarlo en DB
      return await this.uploadService.uploadBuffer(
        file.buffer,
        file.originalname,
        file.mimetype,
      );
    } catch (error) {
      console.log(error);
    }
  }
}
