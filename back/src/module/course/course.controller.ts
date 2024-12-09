import { GenericResponse } from './../../common/dto/generic.response';
import {
  Controller,
  Get,
  Query,
  ValidationPipe,
  HttpException,
  HttpStatus,
  Post,
  Body,
  Patch,
  Param,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Course } from 'src/entity/course.entity';
import { FindOneCourseParamsDto } from './dto/find-one.dto';
import { FindAllCourseParamsDto } from './dto/find-all.dto';
import { FindAllCourseResponse } from './interface/find-all.response';
import { CreateCourseDto } from './dto/create.dto';
import { UpdateCourseDto } from './dto/update.dto';

@ApiTags('course')
@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  // obtener todos los parametros de la query y documentar todos los parametros con swagger
  @Get('/')
  @ApiResponse({ status: 200, description: 'Curso encontrado', type: Course })
  @ApiResponse({ status: 404, description: 'Curso no encontrado' })
  async findAll(
    @Query(ValidationPipe)
    params: FindAllCourseParamsDto,
  ): Promise<GenericResponse<FindAllCourseResponse>> {
    try {
      const data = await this.courseService.findAll(params);

      return new GenericResponse<FindAllCourseResponse>({
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

  @Get('/one')
  @ApiResponse({ status: 200, description: 'Curso encontrado', type: Course })
  @ApiResponse({ status: 404, description: 'Curso no encontrado' })
  async findOne(
    @Query(ValidationPipe)
    params: FindOneCourseParamsDto,
  ): Promise<GenericResponse<Course>> {
    try {
      const data = await this.courseService.findOne(params);
      if (!data)
        return new GenericResponse<Course>({
          data: null,
          message: 'Course not found',
          code: HttpStatus.NOT_FOUND,
        });
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

  @Post('/')
  @ApiResponse({ status: 200, description: 'Curso creado', type: Course })
  @ApiResponse({ status: 404, description: 'Curso no creado' })
  async createCourse(@Body() createCourseDto: CreateCourseDto) {
    try {
      const data = await this.courseService.createCourse(createCourseDto);

      return new GenericResponse<Course>({
        data,
        message: 'Course created',
        code: HttpStatus.OK,
      });
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to create course',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  async updateCourse(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.courseService.updateCourse(id, updateCourseDto);
  }
}
