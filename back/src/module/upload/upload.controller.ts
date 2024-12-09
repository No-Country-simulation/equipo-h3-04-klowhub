import {
  Body,
  Controller,
  HttpException,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { GenericService } from 'src/common/service/idFinder/idfinder.service';
import { UploadResponse } from 'src/common/service/upload/upload.service';

export interface UploadedFileInfo {
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
    private readonly uploadService: UploadService,
    private readonly idFinderService: GenericService,
  ) {}

  @Post()
  @UseInterceptors(
    AnyFilesInterceptor({
      limits: { fileSize: 30 * 1024 * 1024 }, // Limite de los archivos a 30MB
    }),
  )
  async upload(@Body() body: any, @UploadedFiles() files: UploadedFileInfo[]) {
    const { id } = JSON.parse(body.data);
    if (!id) {
      throw new HttpException('Se necesita un id', 500);
    }
    const finded = await this.idFinderService.findEntityById(id);
    if (!finded) {
      throw new HttpException(
        'No se encontro el id para actualizar con imagen',
        500,
      );
    }
    interface Info {
      video?: UploadResponse;
      text?: string;
    }
    let info: Info = {};
    for (const file of files) {
      if (file.mimetype.includes('video')) {
        const videoUrl = await this.uploadService.processAndUploadVideo(file);
        console.log({ videoUrl });
        info.video = videoUrl.video;
      }
      if (file.mimetype.includes('audio')) {
        const audioData = await this.uploadService.processAndUploadAudio(file);
        console.log({ audioData });
        info.text = audioData.text;
      }
      if (file.mimetype.includes('image')) {
        return await this.uploadService.processAndUploadImage(id, file);
      }
    }

    if (finded.entityName === 'Lesson' && info.video && info.text) {
      return await this.uploadService.updateLesson(id, {
        video: info.video.url,
        translation: info.text,
      });
    }
    throw new HttpException('Tipo de archivo no soportado', 500);
  }
}
