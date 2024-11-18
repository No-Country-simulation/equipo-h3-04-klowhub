import { GenericResponse } from './../../common/dto/generic.response';
import {
  Controller,
  Get,
  Query,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Course } from 'src/entity/course.entity';
import { FindOneCourseParamsDto } from './dto/find-one.dto';

@ApiTags('course')
@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  // obtener todos los parametros de la query y documentar todos los parametros con swagger
  @Get('/')
  findAll() {
    return this.courseService.findAll();
  }

  @Get('/one')
  @ApiResponse({ status: 200, description: 'Curso encontrado', type: Course })
  @ApiResponse({ status: 404, description: 'Curso no encontrado' })
  async findOne(
    @Query(ValidationPipe)
    params: FindOneCourseParamsDto,
  ): Promise<GenericResponse<Course>> {
    try {
      const data = await this.courseService.findOne(params);

      return new GenericResponse<Course>({
        data,
        message: 'Course found',
        code: HttpStatus.OK,
      });
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch course',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
