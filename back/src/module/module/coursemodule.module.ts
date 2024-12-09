import { Module } from '@nestjs/common';
import { ModuleController } from './coursemodule.controller';
import { ModuleService } from './coursemodule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module as ModuleEntity } from 'src/entity/module.entity';
import { Course } from 'src/entity/course.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ModuleEntity]),
    TypeOrmModule.forFeature([Course]),
  ],
  controllers: [ModuleController],
  providers: [ModuleService],
  exports: [ModuleService],
})
export class ModuleCourse {}
