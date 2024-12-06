import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/entity/course.entity';
import { Repository } from 'typeorm';
import { FindOneCourseParamsDto } from './dto/find-one.dto';
import { FindAllCourseParamsDto } from './dto/find-all.dto';
import { FindAllCourseResponse } from './interface/find-all.response';
import { CreateCourseDto } from './dto/create.dto';
import { UpdateCourseDto } from './dto/update.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  private readonly DEFAULT_LIMIT = 30;

  async findAll(
    params?: FindAllCourseParamsDto,
  ): Promise<FindAllCourseResponse> {
    try {
      const result = await this.courseRepository.find({
        take: params?.take || this.DEFAULT_LIMIT,
        skip: params?.offset || 0,
        order: params?.order,
        relations: params.relations,
      });

      const total = await this.courseRepository.count();

      return {
        result,
        page: params?.offset || 0,
        perPage: params?.take || this.DEFAULT_LIMIT,
        total,
      };
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
      const { where } = params;

      if (where) {
        Logger.log(where);
        return await this.courseRepository.findOne({
          where,
        });
      }
      return null;
    } catch (error: any) {
      console.error('[ERROR]', error);

      throw new HttpException(
        error?.message || 'Failed to fetch course',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findByProperties(param: any): Promise<Course[]> {
    try {
      const qb = this.courseRepository.createQueryBuilder('course');

      // Aplicar filtros dinámicos
      if (param.properties.levels && param.properties.levels.length > 0) {
        qb.andWhere('course.level IN (:...levels)', {
          levels: param.properties.levels,
        });
      }

      if (param.properties.languages && param.properties.languages.length > 0) {
        qb.andWhere('course.language IN (:...languages)', {
          languages: param.properties.languages,
        });
      }

      if (param.properties.isFree !== undefined) {
        qb.andWhere('course.isFree = :isFree', {
          isFree: param.properties.isFree,
        });
      }

      if (param.properties.platforms && param.properties.platforms.length > 0) {
        qb.innerJoinAndSelect('course.platforms', 'platform').andWhere(
          'platform.id IN (:...platforms)',
          {
            platforms: param.properties.platforms,
          },
        );
      }

      if (param.properties.tools && param.properties.tools.length > 0) {
        qb.innerJoinAndSelect('course.tools', 'tool').andWhere(
          'tool.id IN (:...tools)',
          {
            tools: param.properties.tools,
          },
        );
      }

      if (param.properties.sector && param.properties.sector.length > 0) {
        qb.innerJoinAndSelect('course.sectors', 'sector').andWhere(
          'sector.name IN (:...sector)',
          {
            sector: param.properties.sector,
          },
        );
      }

      // Paginación y orden
      qb.take(param.take || this.DEFAULT_LIMIT).skip(param.offset || 0);

      const result = await qb.getMany();

      return result;
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch courses by properties',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
    try {
      // Validar y mapear DTO a la entidad `Course`
      const newCourse = this.courseRepository.create(createCourseDto);

      // Guardar en la base de datos
      const savedCourse = await this.courseRepository.save(newCourse);

      return savedCourse;
    } catch (error) {
      console.error('Error creating course:', error);
      throw new HttpException(
        'Failed to create course',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateCourse(
    id: string,
    updateCourseDto: UpdateCourseDto,
  ): Promise<Course> {
    const existingCourse = await this.courseRepository.findOne({
      where: { id },
    });

    if (!existingCourse) {
      throw new HttpException(
        `Curso no encontrado con id: ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }

    const updatedCourse = this.courseRepository.merge(
      existingCourse,
      updateCourseDto,
    );
    return this.courseRepository.save(updatedCourse);
  }
}
