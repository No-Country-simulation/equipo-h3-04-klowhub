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

export interface FindOneCourseParams {
  where?: Partial<Course>;
  relations?: string[];
  select?: (keyof Course)[];
}

export interface FindAllCourseParams extends FindOneCourseParams {
  limit?: number;
  offset?: number;
  order?: Record<string, 'ASC' | 'DESC'>;
}

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

export interface FindByProperties extends FindAllCourseParams {
  properties: CourseProperties;
}

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  private readonly DEFAULT_LIMIT = 50;

  async findAll(params?: FindAllCourseParams): Promise<Course[]> {
    try {
      return await this.courseRepository.find({
        take: this.DEFAULT_LIMIT,
        ...params,
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
