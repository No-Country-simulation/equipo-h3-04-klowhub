import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, IsEnum } from 'class-validator';
import { CourseLevel } from 'src/entity/course.entity';

export class FindAllCourseParams {}
