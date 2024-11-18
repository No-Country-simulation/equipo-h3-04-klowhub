import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Course,
  CourseLanguage,
  CourseLevel,
  CourseType,
} from 'src/entity/course.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { FindOneCourseParamsDto } from './dto/find-one.dto';
import { FindAllCourseParamsDto } from './dto/find-all.dto';

export interface CourseProperties {
  levels?: CourseLevel[];
  languages?: CourseLanguage[];
  isFree?: boolean;
  type?: CourseType[];
  platforms?: string[];
  tools?: string[];
  plantformsAndTools?: string[];
  sector?: string[];
}

export interface FindByProperties extends FindAllCourseParamsDto {
  properties: CourseProperties;
}

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  private readonly DEFAULT_LIMIT = 30;

  async findAll(params?: FindAllCourseParamsDto): Promise<Course[]> {
    try {
      return await this.courseRepository.find({
        take: params?.take || this.DEFAULT_LIMIT,
        skip: params?.offset || 0,
        order: params?.order,
        where: params?.where,
        relations: params.relations,
        select: params?.select ? ['id', ...params.select] : undefined,
      });
    } catch (error: unknown) {
      console.error(error);

      throw new HttpException(
        'Failed to fetch courses',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(params?: FindOneCourseParamsDto): Promise<Course | undefined> {
    try {
      console.log('params', params);
      console.log('where', params?.where);
      console.log(typeof params?.where);
      console.log(typeof params);
      return await this.courseRepository.findOne({
        where: params?.where,
      });
    } catch (error: any) {
      console.error('[ERROR]', error);

      throw new HttpException(
        error?.message || 'Failed to fetch course',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findByProperties(param: FindByProperties): Promise<Course[]> {
    try {
      const qb = await this.courseRepository.createQueryBuilder('course');

      return [];
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch courses',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
