import {
  Body,
  Controller,
  HttpException,
  Logger,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

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
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload(@Body() body: any, @UploadedFile() file: UploadedFileInfo) {
    const { id } = JSON.parse(body.data);
    if (!id) {
      throw new HttpException('Se necesita un id', 500);
    }
    if (file.mimetype.includes('audio')) {
      return await this.uploadService.processAndUploadAudio(file);
    } else if (file.mimetype.includes('video')) {
      return Logger.log('Video detected');
    } else if (file.mimetype.includes('image')) {
      return await this.uploadService.processAndUploadImage(id, file);
    }
    throw new HttpException('Tipo de archivo no soportado', 500);
  }
}
