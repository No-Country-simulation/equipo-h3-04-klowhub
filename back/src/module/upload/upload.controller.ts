import {
  Body,
  Controller,
  HttpException,
  Logger,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { LessonService } from '../lesson/lesson.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { SpeechService } from 'src/common/service/speech/speech.service';

interface UploadedFileInfo {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  buffer: Buffer;
}

@Controller('upload')
export class UploadController {
  constructor(
    private readonly lessonService: LessonService,
    private readonly speechService: SpeechService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload(@Body() body: any, @UploadedFile() file: UploadedFileInfo) {
    const { data } = body;
    // TODO: definir DATA para que se actualice la info en la DB con el curso/app/lección/mentoría correspondiente

    if (file.mimetype.includes('audio')) {
      // text: transcripcion, confidence: indice de certeza del texto según el audio
      const { text, confidence } =
        await this.speechService.transcribeAudioBuffer(file.buffer);
      Logger.log('Audio detected');
      return { text };
    } else if (file.mimetype.includes('video')) {
      return Logger.log('Video detected');
    } else if (file.mimetype.includes('image')) {
      return Logger.log('Image detected');
    }
    throw new HttpException('Tipo de archivo no soportado', 500);
  }
}
