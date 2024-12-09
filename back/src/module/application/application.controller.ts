import { GenericResponse } from './../../common/dto/generic.response';
import {
  Controller,
  Get,
  Query,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApplicationService } from './application.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Application } from 'src/entity/application.entity';
import { FindOneApplicationParamsDto } from './dto/find-one.dto';
import { FindAllApplicationParamsDto } from './dto/find-all.dto';
import { FindAllApplicationResponse } from './interface/find-all.response';

@ApiTags('application')
@Controller('application')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  // obtener todos los parametros de la query y documentar todos los parametros con swagger
  @Get('/')
  @ApiResponse({
    status: 200,
    description: 'Aplicación encontrada',
    type: Application,
  })
  @ApiResponse({ status: 404, description: 'Aplicación no encontrada' })
  async findAll(
    @Query(ValidationPipe)
    params: FindAllApplicationParamsDto,
  ): Promise<GenericResponse<FindAllApplicationResponse>> {
    try {
      const data = await this.applicationService.findAll(params);

      return new GenericResponse<FindAllApplicationResponse>({
        data,
        message: 'Application found',
        code: HttpStatus.OK,
      });
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch application',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('/one')
  @ApiResponse({
    status: 200,
    description: 'Aplicación encontrada',
    type: Application,
  })
  @ApiResponse({ status: 404, description: 'Aplicación no encontrada' })
  async findOne(
    @Query(ValidationPipe)
    params: FindOneApplicationParamsDto,
  ): Promise<GenericResponse<Application>> {
    try {
      const data = await this.applicationService.findOne(params);
      if (!data)
        return new GenericResponse<Application>({
          data: null,
          message: 'Application not found',
          code: HttpStatus.NOT_FOUND,
        });
      return new GenericResponse<Application>({
        data,
        message: 'Application found',
        code: HttpStatus.OK,
      });
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch application',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // @Get('/filter')
  // @ApiResponse({ status: 200, description: 'Aplicación encontrada', type: Application[] })
  // @ApiResponse({ status: 404, description: 'Aplicación no encontrada' })
}
