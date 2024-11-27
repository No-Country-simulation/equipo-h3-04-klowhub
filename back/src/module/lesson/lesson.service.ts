import { Injectable } from '@nestjs/common';
import { SpeechService } from 'src/common/service/speech/speech.service';
import { UploadService } from 'src/common/service/upload/upload.service';

@Injectable()
export class LessonService {
  constructor(
    private readonly uploadService: UploadService,
    private readonly speechService: SpeechService,
  ) {}

  async create(file: any) {
    try {
      const { text, confidence } =
        await this.speechService.transcribeAudioBuffer(file.buffer);

      console.log(text, confidence);
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
