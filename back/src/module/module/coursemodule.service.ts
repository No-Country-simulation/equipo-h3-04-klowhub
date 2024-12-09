import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/entity/course.entity';
import { Module } from 'src/entity/module.entity';
import { Repository } from 'typeorm';
import { CreateModuleDto } from './dto/create-coursemodule.dto';
import { UpdateModuleDto } from './dto/update-coursemodule.dto';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(Module)
    private readonly moduleRepository: Repository<Module>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async createModule(createModuleDto: CreateModuleDto): Promise<Module> {
    const { courseId, ...moduleData } = createModuleDto;

    const course = await this.courseRepository.findOneBy({ id: courseId });
    if (!course) {
      throw new Error('Course not found');
    }

    const module = this.moduleRepository.create({
      ...moduleData,
      course,
    });

    return this.moduleRepository.save(module);
  }

  async updateModule(
    id: string,
    updateModuleDto: UpdateModuleDto,
  ): Promise<Module> {
    const module = await this.moduleRepository.findOne({
      where: { id },
      relations: ['course'],
    });

    if (!module) {
      throw new HttpException('Module not found', 404);
    }

    if (updateModuleDto.courseId) {
      const course = await this.courseRepository.findOneBy({
        id: updateModuleDto.courseId,
      });
      if (!course) {
        throw new HttpException('Course not found', 404);
      }
      module.course = course;
    }

    Object.assign(module, updateModuleDto);

    return this.moduleRepository.save(module);
  }
}
