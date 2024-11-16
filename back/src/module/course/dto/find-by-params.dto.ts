import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, IsEnum } from 'class-validator';
import { CourseLevel } from 'src/entity/course.entity';

export class FindAllCourseParams {
  @IsArray()
  @IsString({ each: true })
  platforms?: string[];

  @IsArray()
  @IsEnum(CourseLevel, { each: true, message: 'Invalid course level' })
  @ApiProperty({
    enum: CourseLevel,
    isArray: true,
    required: false,
    description: 'Course levels',
  })
  levels?: CourseLevel[];
}
