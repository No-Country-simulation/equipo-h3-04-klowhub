import { HttpException, Injectable } from '@nestjs/common';
import { GenericService } from 'src/common/service/idFinder/idfinder.service';
import { SpeechService } from 'src/common/service/speech/speech.service';
import { UploadedFileInfo } from './upload.controller';
import { CourseService } from '../course/course.service';
import { UploadService as UploadGoogle } from 'src/common/service/upload/upload.service';

@Injectable()
export class UploadService {
  constructor(
    private readonly speechService: SpeechService,
    private readonly idFinderService: GenericService,
    private readonly courseService: CourseService,
    private readonly uploadService: UploadGoogle,
  ) {}

  async processAndUploadAudio(file: UploadedFileInfo) {
    // text: transcripcion, confidence: indice de certeza del texto según el audio
    const { text, confidence } = await this.speechService.transcribeAudioBuffer(
      file.buffer,
    );
    return { text };
  }

  async processAndUploadImage(id: string, file: UploadedFileInfo) {
    const finded = await this.idFinderService.findEntityById(id);
    if (!finded) {
      throw new HttpException(
        'No se encontro el id para actualizar con imagen',
        500,
      );
    }
    const image = await this.uploadService.uploadBuffer(
      file.buffer,
      file.originalname,
      file.mimetype,
    );
    if (finded.entityName === 'course') {
      this.courseService.updateCourse(id, { coverImage: 'asdasd' });
    }

    return null;
  }
}
