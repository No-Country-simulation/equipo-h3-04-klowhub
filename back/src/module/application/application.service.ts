import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { FindOneApplicationParamsDto } from './dto/find-one.dto';
import { FindAllApplicationParamsDto } from './dto/find-all.dto';
import { FindAllApplicationResponse } from './interface/find-all.response';
import { Application } from 'src/entity/application.entity';

export interface ApplicationProperties {}

export interface FindByProperties extends FindAllApplicationParamsDto {
  properties: ApplicationProperties;
}

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Application)
    private applicationRepository: Repository<Application>,
  ) {}

  private readonly DEFAULT_LIMIT = 30;

  async findAll(
    params?: FindAllApplicationParamsDto,
  ): Promise<FindAllApplicationResponse> {
    try {
      const result = await this.applicationRepository.find({
        take: params?.take || this.DEFAULT_LIMIT,
        skip: params?.offset || 0,
        order: params?.order,
        where: params?.where,
        relations: params.relations,
        select: params?.select ? ['id', ...params.select] : undefined,
      });

      const total = await this.applicationRepository.count();

      return {
        result,
        page: params?.offset || 0,
        perPage: params?.take || this.DEFAULT_LIMIT,
        total,
      };
    } catch (error: unknown) {
      console.error(error);

      throw new HttpException(
        'Failed to fetch applications',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(
    params?: FindOneApplicationParamsDto,
  ): Promise<Application | undefined> {
    try {
      console.log('params', params);
      console.log('where', params?.where);
      console.log(typeof params?.where);
      console.log(typeof params);
      return await this.applicationRepository.findOne({
        where: params?.where,
      });
    } catch (error: any) {
      console.error('[ERROR]', error);

      throw new HttpException(
        error?.message || 'Failed to fetch application',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findByProperties(param: FindByProperties): Promise<Application[]> {
    try {
      const qb = await this.applicationRepository.createQueryBuilder(
        'application',
      );

      return [];
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch applications',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
