import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Lesson } from 'src/entity/lesson.entity';
import { Module } from 'src/entity/module.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
    @InjectRepository(Module)
    private readonly moduleRepository: Repository<Module>,
  ) {}

  async createLesson(createLessonDto: CreateLessonDto): Promise<Lesson> {
    const { moduleId, ...lessonData } = createLessonDto;

    const module = await this.moduleRepository.findOneBy({ id: moduleId });
    if (!module) {
      throw new NotFoundException('Module not found');
    }

    const lesson = this.lessonRepository.create({
      ...lessonData,
      module,
    });

    return this.lessonRepository.save(lesson);
  }

  async updateLesson(
    id: string,
    updateLessonDto: UpdateLessonDto,
  ): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOne({
      where: { id },
      relations: ['module'],
    });

    if (!lesson) {
      throw new NotFoundException('Lesson not found');
    }

    if (updateLessonDto.moduleId) {
      const module = await this.moduleRepository.findOneBy({
        id: updateLessonDto.moduleId,
      });
      if (!module) {
        throw new NotFoundException('Module not found');
      }
      lesson.module = module;
    }
    const upadtedLesson = await this.lessonRepository.merge(
      lesson,
      updateLessonDto,
    );
    return this.lessonRepository.save(upadtedLesson);
  }

  async deleteLesson(id: string): Promise<void> {
    const result = await this.lessonRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('Lesson not found');
    }
  }
}
