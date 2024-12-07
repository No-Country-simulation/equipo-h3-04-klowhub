import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from 'src/entity/lesson.entity';
import { Module as ModuleEntity } from 'src/entity/module.entity';
import { CourseModule } from '../course/course.module';
@Module({
  imports: [TypeOrmModule.forFeature([Lesson, ModuleEntity]), CourseModule],
  controllers: [LessonController],
  providers: [LessonService],
  exports: [LessonService],
})
export class LessonModule {}
